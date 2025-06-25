import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
import { KNOWLEDGE_BASE } from '@/lib/chatbot-config'

// Configuration OpenAI côté serveur (sécurisé)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Variable d'environnement serveur
})

// Fonction pour extraire le contexte pertinent de la base de connaissances
const extractRelevantContext = (question: string): string => {
  const questionLower = question.toLowerCase()
  const relevantCategories: string[] = []
  
  // Recherche des catégories pertinentes
  for (const [, data] of Object.entries(KNOWLEDGE_BASE)) {
    if (data.keywords.some(keyword => questionLower.includes(keyword))) {
      relevantCategories.push(`**${data.category}**:\n${data.response}`)
    }
  }
  
  // Si aucune catégorie spécifique trouvée, inclure les informations générales
  if (relevantCategories.length === 0) {
    relevantCategories.push(
      KNOWLEDGE_BASE.services.response,
      KNOWLEDGE_BASE.contact.response
    )
  }
  
  return relevantCategories.slice(0, 3).join('\n\n---\n\n')
}

// Système prompt pour GPT
const SYSTEM_PROMPT = `Tu es l'assistant virtuel d'Oki Expertise, un cabinet d'expertise comptable français moderne et professionnel.

IDENTITÉ & PERSONNALITÉ :
- Tu es un expert-comptable virtuel compétent et bienveillant
- Tu parles français de manière professionnelle mais accessible
- Tu es précis, informatif et orienté solutions
- Tu utilises des emojis de manière modérée et professionnelle

INFORMATIONS ENTREPRISE :
- Oki Expertise : Cabinet d'expertise comptable, audit et conseil
- Inscrit à l'Ordre des Experts-Comptables
- Téléphone : +33 7 51 51 66 42
- Services : Expertise comptable, Audit, Conseil juridique et fiscal, Création d'entreprise
- Spécialisé dans l'accompagnement des TPE/PME

RÈGLES DE RÉPONSE :
1. Réponds UNIQUEMENT aux questions liées à la comptabilité, l'audit, le juridique, la fiscalité, la création d'entreprise
2. Utilise les informations du contexte fourni en priorité
3. Si tu ne connais pas une information spécifique, oriente vers le contact direct
4. Sois concis mais complet (maximum 200 mots)
5. Termine toujours par une question ou une proposition d'aide
6. Utilise un ton professionnel mais chaleureux
7. Structure tes réponses avec des puces ou numéros si nécessaire

INTERDICTIONS :
- Ne réponds PAS aux questions hors sujet (météo, actualités, autres domaines)
- Ne donne PAS de conseils juridiques ou fiscaux précis sans consultation
- N'invente PAS d'informations sur Oki Expertise

Si une question est hors sujet, réponds poliment que tu es spécialisé dans l'expertise comptable et oriente vers les services d'Oki Expertise.`

// Fonction de fallback en cas d'erreur GPT
const generateFallbackResponse = (question: string): string => {
  const questionLower = question.toLowerCase()
  
  // Recherche dans la base de connaissances locale
  for (const [, data] of Object.entries(KNOWLEDGE_BASE)) {
    if (data.keywords.some(keyword => questionLower.includes(keyword))) {
      return `${data.response}\n\n💡 *Pour des conseils personnalisés, contactez-nous au +33 7 51 51 66 42.*`
    }
  }
  
  // Réponse par défaut
  return `Je comprends votre question sur "${question}".

🤖 Pour vous donner la réponse la plus précise et personnalisée, je vous recommande de :

📞 **Contacter directement notre équipe**
   +33 7 51 51 66 42

💬 **Utiliser WhatsApp**
   Réponse rapide garantie

📧 **Remplir notre formulaire de contact**
   Sur notre site web

Notre équipe d'experts-comptables vous répondra dans les plus brefs délais avec des conseils adaptés à votre situation.

Y a-t-il autre chose sur laquelle je peux vous renseigner ?`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Vérifier la méthode HTTP
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    const { question } = req.body

    // Validation de base
    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({ error: 'Question manquante ou invalide' })
    }

    // Limitation de longueur
    if (question.length > 500) {
      return res.status(400).json({ error: 'Question trop longue (max 500 caractères)' })
    }

    // Vérification de la clé API
    if (!process.env.OPENAI_API_KEY) {
      console.warn('Clé API OpenAI manquante, utilisation du fallback')
      return res.status(200).json({ 
        response: generateFallbackResponse(question),
        source: 'fallback'
      })
    }

    // Extraction du contexte pertinent
    const context = extractRelevantContext(question)
    
    // Appel à l'API OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `${SYSTEM_PROMPT}\n\nCONTEXTE PERTINENT :\n${context}`
        },
        {
          role: "user",
          content: question
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1
    })

    const response = completion.choices[0]?.message?.content?.trim()
    
    if (!response) {
      throw new Error('Réponse vide de GPT')
    }

    return res.status(200).json({ 
      response,
      source: 'gpt',
      tokens: completion.usage?.total_tokens || 0
    })

  } catch (error) {
    console.error('Erreur API Chat:', error)
    
    // Fallback en cas d'erreur
    const fallbackResponse = generateFallbackResponse(req.body.question || '')
    
    return res.status(200).json({ 
      response: fallbackResponse,
      source: 'fallback',
      error: 'Erreur GPT, utilisation du fallback'
    })
  }
} 
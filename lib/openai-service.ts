import { KNOWLEDGE_BASE } from './chatbot-config'

// Fonction principale pour générer une réponse avec GPT (via API sécurisée)
export const generateGPTResponse = async (question: string): Promise<string> => {
  try {
    // Appel à notre API sécurisée
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    })

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.error) {
      throw new Error(data.error)
    }

    return data.response

  } catch (error) {
    console.error('Erreur GPT:', error)
    
    // Fallback vers la base de connaissances locale
    return generateFallbackResponse(question)
  }
}

// Fonction de fallback en cas d'erreur GPT
const generateFallbackResponse = (question: string): string => {
  const questionLower = question.toLowerCase()
  
  // Recherche dans la base de connaissances locale
  for (const [, data] of Object.entries(KNOWLEDGE_BASE)) {
    if (data.keywords.some(keyword => questionLower.includes(keyword))) {
      return `${data.response}\n\n💡 *Réponse générée par notre base de connaissances. Pour des conseils personnalisés, contactez-nous au +33 7 51 51 66 42.*`
    }
  }
  
  // Réponse par défaut
  return `Je comprends votre question sur "${question}".

🤖 Pour vous donner la réponse la plus précise et personnalisée, je vous recommande de :

📞 **Contacter directement notre équipe**
   +33 7 69 59 12 20

💬 **Utiliser WhatsApp**
   Réponse rapide garantie

📧 **Remplir notre formulaire de contact**
   Sur notre site web

Notre équipe d'experts-comptables vous répondra dans les plus brefs délais avec des conseils adaptés à votre situation.

Y a-t-il autre chose sur laquelle je peux vous renseigner ?`
}

// Fonction pour valider si une question est dans le domaine d'expertise
export const isQuestionRelevant = (question: string): boolean => {
  const relevantKeywords = [
    'comptable', 'comptabilité', 'audit', 'fiscal', 'juridique', 'entreprise',
    'société', 'création', 'bilan', 'déclaration', 'tva', 'impôt', 'charge',
    'salaire', 'statut', 'sarl', 'sas', 'auto-entrepreneur', 'micro-entreprise',
    'expert-comptable', 'commissaire', 'conseil', 'gestion', 'finance'
  ]
  
  const questionLower = question.toLowerCase()
  return relevantKeywords.some(keyword => questionLower.includes(keyword))
} 
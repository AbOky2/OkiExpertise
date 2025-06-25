// Configuration du chatbot RAG pour Oki Expertise

export interface KnowledgeItem {
  keywords: string[]
  response: string
  category: string
}

export const CHATBOT_CONFIG = {
  // Configuration générale
  name: "Assistant Oki Expertise",
  welcomeMessage: "Bonjour ! Je suis l'assistant virtuel d'Oki Expertise. Comment puis-je vous aider avec vos questions comptables, juridiques ou administratives ?",
  
  // Délai de réponse simulé (en millisecondes)
  responseDelay: {
    min: 1000,
    max: 3000
  },

  // Questions rapides suggérées
  quickQuestions: [
    "Quels sont vos services comptables ?",
    "Comment créer une entreprise ?",
    "Quelles sont vos tarifs ?",
    "Audit et expertise comptable",
    "Conseil juridique et fiscal",
    "Accompagnement création d'entreprise",
    "Services de commissariat aux comptes"
  ]
}

export const KNOWLEDGE_BASE: Record<string, KnowledgeItem> = {
  services: {
    category: "Services",
    keywords: [
      'service', 'services', 'comptable', 'comptabilité', 'audit', 'conseil', 
      'juridique', 'expertise', 'accompagnement', 'gestion', 'que faites-vous',
      'proposez-vous', 'offrez-vous'
    ],
    response: `Oki Expertise propose une gamme complète de services :

🔹 **Expertise Comptable**
   • Tenue de comptabilité générale
   • Établissement des comptes annuels
   • Déclarations fiscales et sociales
   • Bulletins de paie

🔹 **Audit & Commissariat aux Comptes**
   • Certification des comptes
   • Audit légal et contractuel
   • Missions d'assurance

🔹 **Conseil Juridique & Fiscal**
   • Optimisation fiscale
   • Accompagnement juridique
   • Conseil en droit des sociétés

🔹 **Conseil en Gestion**
   • Analyse financière
   • Tableaux de bord
   • Prévisionnel et business plan

🔹 **Création d'Entreprise**
   • Choix du statut juridique
   • Formalités administratives
   • Accompagnement post-création

Souhaitez-vous plus de détails sur un service particulier ?`
  },

  tarifs: {
    category: "Tarification",
    keywords: [
      'tarif', 'tarifs', 'prix', 'coût', 'coute', 'combien', 'facture',
      'facturation', 'honoraires', 'devis', 'budget', 'cher', 'gratuit'
    ],
    response: `Nos tarifs sont transparents et adaptés à vos besoins :

💰 **Tarification personnalisée**
   • Adaptée à votre secteur d'activité
   • Selon la taille de votre entreprise
   • En fonction de vos besoins spécifiques

📊 **Formules proposées**
   • Forfaits mensuels pour les TPE/PME
   • Tarifs à la mission pour projets ponctuels
   • Accompagnement annuel tout inclus

🎯 **Avantages**
   • Devis gratuit et sans engagement
   • Pas de frais cachés
   • Réactivité garantie sous 24h

📞 **Obtenir un devis**
Contactez-nous au **+33 7 51 51 66 42** ou via WhatsApp pour recevoir votre devis personnalisé gratuit.`
  },

  creation: {
    category: "Création d'entreprise",
    keywords: [
      'créer', 'création', 'entreprise', 'société', 'statut', 'sarl', 'sas',
      'auto-entrepreneur', 'micro-entreprise', 'immatriculation', 'kbis',
      'statuts', 'capital', 'siret', 'siren'
    ],
    response: `Nous vous accompagnons dans la création de votre entreprise :

📋 **Étapes de création**
   1. **Analyse de votre projet** - Étude de faisabilité
   2. **Choix du statut** - SARL, SAS, auto-entrepreneur...
   3. **Rédaction des statuts** - Personnalisés selon vos besoins
   4. **Formalités administratives** - Immatriculation, SIRET
   5. **Ouverture compte bancaire** - Accompagnement
   6. **Mise en place comptabilité** - Outils et procédures

⚡ **Délais**
   • Auto-entrepreneur : 24-48h
   • SARL/SAS : 7 à 15 jours
   • Statuts complexes : 15 à 30 jours

💼 **Inclus dans notre accompagnement**
   • Conseil sur le statut optimal
   • Rédaction des documents juridiques
   • Suivi des formalités
   • Formation à la gestion

Voulez-vous discuter de votre projet de création ?`
  },

  contact: {
    category: "Contact",
    keywords: [
      'contact', 'contacter', 'rendez-vous', 'rdv', 'téléphone', 'appeler',
      'mail', 'email', 'adresse', 'horaires', 'disponible', 'joindre'
    ],
    response: `Contactez Oki Expertise facilement :

📞 **Téléphone**
   +33 7 51 51 66 42

💬 **WhatsApp**
   Disponible 24h/7j pour vos questions urgentes

📧 **Email**
   Via notre formulaire de contact sécurisé

🕐 **Horaires**
   • Lundi - Vendredi : 9h00 - 18h00
   • Samedi : Sur rendez-vous
   • Urgences : WhatsApp 24h/7j

⚡ **Engagement qualité**
   • Réponse garantie sous 24h
   • Premier conseil gratuit
   • Écoute personnalisée

🎯 **Prise de rendez-vous**
   Contactez-nous pour fixer un rendez-vous en présentiel ou en visioconférence selon votre préférence.`
  },

  audit: {
    category: "Audit",
    keywords: [
      'audit', 'commissaire', 'comptes', 'certification', 'contrôle',
      'vérification', 'légal', 'contractuel', 'assurance', 'rapport'
    ],
    response: `Nos services d'audit et commissariat aux comptes :

🔍 **Audit Légal**
   • Commissariat aux comptes statutaire
   • Certification des comptes annuels
   • Rapport de gestion
   • Assemblées générales

📊 **Audit Contractuel**
   • Due diligence acquisition/cession
   • Audit de procédures
   • Contrôle interne
   • Audit social et fiscal

✅ **Notre expertise**
   • Inscrit à l'Ordre des Experts-Comptables
   • Expérience multi-sectorielle
   • Équipe dédiée aux missions d'audit
   • Outils d'audit modernes

📈 **Secteurs d'intervention**
   • Industrie et BTP
   • Commerce et distribution  
   • Services et conseil
   • Associations et fondations

Besoin d'un audit pour votre entreprise ?`
  },

  juridique: {
    category: "Conseil juridique",
    keywords: [
      'juridique', 'droit', 'contrat', 'social', 'fiscal', 'optimisation',
      'conseil', 'legal', 'conformité', 'réglementation', 'loi'
    ],
    response: `Notre expertise en conseil juridique et fiscal :

⚖️ **Droit des Sociétés**
   • Transformation de sociétés
   • Augmentation de capital
   • Cession/acquisition
   • Pactes d'actionnaires

💼 **Droit Social**
   • Contrats de travail
   • Conventions collectives
   • Ruptures conventionnelles
   • Représentation du personnel

📊 **Optimisation Fiscale**
   • Choix du régime fiscal optimal
   • Crédit d'impôt recherche (CIR)
   • TVA et taxes spécifiques
   • Transmission d'entreprise

🔒 **Conformité**
   • RGPD et protection des données
   • Obligations légales
   • Veille réglementaire
   • Formation équipes

Notre approche : conseil préventif pour éviter les risques juridiques et fiscaux.`
  },

  secteurs: {
    category: "Secteurs d'activité",
    keywords: [
      'secteur', 'activité', 'industrie', 'commerce', 'btp', 'construction',
      'restaurant', 'hôtel', 'médical', 'libéral', 'artisan', 'spécialisation'
    ],
    response: `Oki Expertise intervient dans de nombreux secteurs :

🏭 **Industrie & BTP**
   • Manufacturing et production
   • Construction et travaux publics
   • Énergie et environnement
   • Spécificités comptables sectorielles

🛒 **Commerce & Distribution**
   • Commerce de détail
   • E-commerce et marketplace
   • Import/export
   • Gestion des stocks

🍽️ **Hôtellerie-Restauration**
   • Restaurants et bars
   • Hôtels et hébergements
   • Traiteurs et événementiel
   • Réglementation spécifique

👨‍⚕️ **Professions Libérales**
   • Médecins et paramédicaux
   • Avocats et notaires
   • Architectes et ingénieurs
   • Régimes fiscaux spéciaux

🎨 **Services & Conseil**
   • Agences de communication
   • Cabinets de conseil
   • Sociétés de services
   • Startups et scale-ups

Quel que soit votre secteur, nous nous adaptons à vos spécificités !`
  }
}

export const DEFAULT_RESPONSE = (question: string) => `Je comprends votre question sur "${question}".

Pour vous donner la réponse la plus précise et personnalisée, je vous invite à :

📞 **Contacter directement notre équipe**
   +33 7 51 51 66 42

💬 **Utiliser WhatsApp**
   Pour une réponse rapide et directe

📧 **Remplir notre formulaire**
   Contact sécurisé sur notre site

🎯 **Prendre rendez-vous**
   Consultation gratuite de 30 minutes

Notre équipe d'experts-comptables vous répondra dans les plus brefs délais avec des conseils personnalisés selon votre situation spécifique.

Y a-t-il autre chose sur laquelle je peux vous renseigner ?` 
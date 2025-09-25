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
  presentation_entreprise: {
    category: "Présentation",
    keywords: [
      'présentation', 'qui êtes-vous', 'entreprise', 'cabinet', 'à propos',
      'histoire', 'oki expertise', 'présenter', 'parlez-moi', 'qui sommes-nous'
    ],
    response: `**Oki Expertise - Cabinet d'Expertise Comptable à Paris**

🏢 **Localisation**
   • **Adresse** : 9 rue des Colonnes, 75002 Paris
   • **SIRET** : 980 509 483 00015
   • Implanté au cœur de Paris, dans le 2e arrondissement

👨‍💼 **Direction**
   • **SALEH Issa Soumaine** - Managing Partner & Expert-Comptable
   • Diplômé DEC, inscrit à l'Ordre des Experts-Comptables Paris Île-de-France
   • Plus de 8 ans d'expérience, dont 7,5 ans chez Deloitte (Big Four)

🌍 **Présence Internationale**
   • **Bureaux** : Paris (France) et N'Djamena (Tchad)
   • Expertise internationale avec connaissance des normes locales
   • Accompagnement personnalisé selon les spécificités fiscales et légales

🎯 **Notre Mission**
Oki Expertise est dédié à offrir des services de haute qualité dans la comptabilité, l'audit et le conseil stratégique. Nous comprenons l'importance cruciale d'une gestion financière efficace pour la croissance et le succès d'une entreprise.

Souhaitez-vous en savoir plus sur nos services ou notre équipe ?`
  },

  expert_comptable: {
    category: "Expert-Comptable",
    keywords: [
      'expert-comptable', 'saleh', 'issa', 'dirigeant', 'associé', 'gérant',
      'diplôme', 'formation', 'expérience', 'parcours', 'deloitte', 'big four'
    ],
    response: `**SALEH Issa Soumaine - Expert-Comptable Diplômé**

🎓 **Formation & Diplômes**
   • **2023** : Diplôme d'Expertise Comptable (DEC) - Niveau Doctorat
   • **2018** : Diplôme Supérieur de Comptabilité et de Gestion (DSCG)
   • **2014** : Master Comptabilité Contrôle Audit (CCA) - Université Jean-Moulin Lyon III
   • **2013** : Maîtrise Comptabilité Contrôle Audit (CCA)

💼 **Expérience Professionnelle**
   • **Depuis Oct. 2023** : Associé gérant d'Oki Expertise
   • **2022-2023** : Consultant Freelance
   • **2015-2022** : Cabinet Deloitte (7,5 ans) - Assistant à Manager 3
   • **2014** : Cabinet Ernst & Young - Junior

🏆 **Expertises Sectorielles**
   • Industrie, Services, Projets de développement
   • Banque et Finance Islamique
   • Technologies, Médias, Télécoms
   • Énergie, Oil & Gas
   • Secteur public & ONG

📋 **Inscriptions Professionnelles**
   • Inscrit à l'Ordre des Experts-Comptables Île-de-France
   • N° d'inscription : 140000455301

Voulez-vous discuter de votre projet avec notre expert-comptable ?`
  },

  services_detailles: {
    category: "Services Détaillés",
    keywords: [
      'services détaillés', 'prestations complètes', 'missions', 'audit financier',
      'finance islamique', 'risques', 'réglementaire', 'tax legal'
    ],
    response: `**Nos Services Complets**

🔍 **AUDIT**
   • Audit comptable et financier
   • Commissariat aux apports
   • Audit des coûts pétroliers
   • Audit qualité, stratégique et opérationnel
   • Missions contractuelles d'audit

🕌 **FINANCE ISLAMIQUE**
   • Élaboration du contrôle interne bancaire islamique
   • Audit chariatique contractuel
   • Gouvernance chariatique
   • Évaluation des dispositifs de contrôle interne

⚖️ **TAX & LEGAL**
   • Fiscalité des entreprises et individuelle
   • Obligations déclaratives et revue fiscale
   • Audit et contentieux fiscal
   • Conseil juridique et restructuration d'entreprises
   • Négociation de conventions fiscales internationales

🛡️ **RISQUES & RÉGLEMENTAIRE**
   • Cartographie des risques
   • Stratégie de gouvernance COSO
   • Risques SI & Technologique, Cyber-risques
   • Conformité OHADA, CEMAC, COBAC

💼 **CONSEIL**
   • Études de faisabilité et business plan
   • Évaluation d'entreprise
   • Stratégie & Innovation
   • Marketing & Commercial
   • Systèmes d'Information & Technologies

Quel service vous intéresse le plus ?`
  },

  valeurs_entreprise: {
    category: "Valeurs",
    keywords: [
      'valeurs', 'excellence', 'proximité', 'efficacité', 'engagement',
      'philosophie', 'approche', 'méthode', 'différence', 'pourquoi vous choisir'
    ],
    response: `**Nos Valeurs Fondamentales**

🌟 **EXCELLENCE**
L'Excellence est bien plus qu'une simple aspiration ; c'est une norme que nous nous efforçons de surpasser à chaque étape de notre travail. La qualité de nos services est la pierre angulaire de notre réputation.

🤝 **PROXIMITÉ**
Nous considérons nos clients comme des partenaires et comprenons l'importance d'une communication transparente et ouverte. La proximité signifie que nous sommes là pour écouter, comprendre et répondre aux besoins spécifiques de chaque client.

⚡ **EFFICACITÉ**
Nous investissons dans des processus modernes et des technologies de pointe pour garantir une prestation de services rapide, précise et adaptée. Notre engagement envers l'efficacité ne compromet jamais la qualité.

🎯 **Notre Engagement**
L'engagement envers l'excellence, la proximité avec nos clients et l'efficacité opérationnelle sont les piliers fondamentaux d'Oki Expertise. Nous sommes fiers de contribuer activement au succès de nos clients.

💡 **Approche Personnalisée**
Nous croyons fermement que chaque client est unique, c'est pourquoi nous nous efforçons de fournir des solutions sur mesure qui répondent à vos besoins spécifiques et à vos objectifs commerciaux.

Ces valeurs vous correspondent-elles ? Parlons de votre projet !`
  },

  secteurs_intervention: {
    category: "Secteurs",
    keywords: [
      'secteurs', 'domaines', 'industries', 'spécialisation', 'technologies',
      'médias', 'télécoms', 'banque', 'assurance', 'énergie', 'oil', 'gas',
      'éducation', 'formation', 'ong', 'secteur public'
    ],
    response: `**Nos Secteurs d'Intervention**

🖥️ **Technologies, Médias & Télécoms**
   • Startups technologiques
   • Entreprises de médias
   • Sociétés de télécommunications

🏭 **Industries & Services**
   • Secteur industriel
   • Services aux entreprises
   • Manufacturing

🏛️ **Secteur Public & ONG**
   • Administrations publiques
   • Organisations non gouvernementales
   • Associations

🏦 **Banque & Assurance**
   • Institutions bancaires
   • Compagnies d'assurance
   • Finance islamique

⚡ **Énergie, Oil & Gas**
   • Compagnies pétrolières
   • Énergies renouvelables
   • Secteur énergétique

🎓 **Éducation/Formation**
   • Établissements d'enseignement
   • Centres de formation
   • Organismes éducatifs

🌍 **Expertise Internationale**
Notre présence au Tchad nous permet d'offrir une expertise adaptée aux spécificités africaines, avec une connaissance approfondie des normes OHADA, CEMAC et COBAC.

Dans quel secteur évoluez-vous ? Nous avons l'expertise adaptée !`
  },

  presence_internationale: {
    category: "International",
    keywords: [
      'international', 'tchad', 'afrique', 'ndjamena', 'ohada', 'cemac',
      'cobac', 'normes locales', 'expertise internationale', 'présence'
    ],
    response: `**Notre Présence Internationale**

🌍 **Bureaux**
   • **Paris, France** : 9 rue des Colonnes, 75002
   • **N'Djamena, Tchad** : Présence locale établie

🎯 **Avantages de Notre Présence au Tchad**

✅ **Expertise Internationale**
La présence d'Oki Expertise au Tchad témoigne de notre capacité à offrir une expertise internationale adaptée.

✅ **Accompagnement Localisé**
Nous offrons un accompagnement personnalisé, prenant en compte les spécificités fiscales, légales et économiques locales.

✅ **Réactivité et Proximité**
Notre présence locale facilite une communication fluide et immédiate avec nos clients basés au Tchad.

✅ **Connaissance des Normes Locales**
Expertise approfondie des normes comptables et fiscales tchadiennes en constante évolution.

✅ **Adaptabilité Culturelle**
Compréhension de la culture d'affaires locale pour construire des relations durables.

📋 **Conformité Réglementaire**
   • **OHADA** : Organisation pour l'Harmonisation en Afrique du Droit des Affaires
   • **CEMAC** : Communauté Économique et Monétaire de l'Afrique Centrale
   • **COBAC** : Commission Bancaire de l'Afrique Centrale

🏆 **Avantages Concurrentiels**
La combinaison de l'expertise parisienne et de la présence locale confère à Oki Expertise des avantages distincts.

Avez-vous des projets en Afrique ou besoin d'expertise internationale ?`
  },

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
Contactez-nous au **+33 7 69 59 12 20** ou via WhatsApp pour recevoir votre devis personnalisé gratuit.`
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
   • Mobile : +33 7 69 59 12 20
   • Fixe : +33 9 77 21 92 25
   • Mobile Tchad : +235 66 21 28 79

💬 **WhatsApp**
   Disponible 24h/7j pour vos questions urgentes

📧 **Email**
   issa.saleh@okiexpertise.fr

📍 **Adresse**
   9 rue des Colonnes, 75002 Paris

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
    response: `Nos services de conseil juridique et fiscal :

⚖️ **Conseil Juridique**
   • Droit des sociétés
   • Contrats commerciaux
   • Restructurations d'entreprises
   • Fusions et acquisitions

💼 **Optimisation Fiscale**
   • Analyse de votre situation fiscale
   • Stratégies d'optimisation légales
   • Gestion des obligations déclaratives
   • Négociation avec l'administration

🛡️ **Conformité Réglementaire**
   • Mise en conformité RGPD
   • Respect des normes sectorielles
   • Veille réglementaire
   • Formation de vos équipes

🌍 **Droit International**
   • Conventions fiscales internationales
   • Implantations à l'étranger
   • Normes OHADA (Afrique)

Quels sont vos enjeux juridiques et fiscaux ?`
  },

  secteurs: {
    category: "Secteurs d'activité",
    keywords: [
      'secteur', 'secteurs', 'activité', 'industrie', 'commerce', 'service',
      'spécialisation', 'domaine', 'expertise sectorielle'
    ],
    response: `Nos domaines d'expertise sectorielle :

🏭 **Industrie & BTP**
   • Manufacturing et production
   • Bâtiment et travaux publics
   • Ingénierie et construction

💼 **Services & Conseil**
   • Conseil en management
   • Services aux entreprises
   • Professions libérales

🛒 **Commerce & Distribution**
   • Commerce de détail
   • Grande distribution
   • E-commerce

🏦 **Finance & Assurance**
   • Institutions financières
   • Compagnies d'assurance
   • Finance islamique

🎓 **Éducation & Formation**
   • Établissements d'enseignement
   • Organismes de formation
   • Recherche et développement

🏛️ **Secteur Public & Associations**
   • Collectivités territoriales
   • ONG et associations
   • Fondations

Dans quel secteur évoluez-vous ?`
  }
}

// Réponse par défaut si aucune correspondance trouvée
export const DEFAULT_RESPONSE = (question: string) => `Je comprends votre question sur "${question}".

🤖 Pour vous donner la réponse la plus précise et personnalisée, je vous recommande de :

📞 **Contacter directement notre équipe**
   +33 7 69 59 12 20

💬 **Utiliser WhatsApp**
   Réponse rapide garantie

📧 **Email**
   issa.saleh@okiexpertise.fr

Notre équipe d'experts-comptables vous répondra dans les plus brefs délais avec des conseils adaptés à votre situation.

Y a-t-il autre chose sur laquelle je peux vous renseigner ?` 
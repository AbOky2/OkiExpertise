#!/usr/bin/env node

// 📄 Script d'extraction PDF - Intégration dans le chatbot
// Usage: node scripts/extract-pdf.js

const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function extractPDFContent() {
  try {
    console.log('📄 Extraction du contenu PDF...');
    
    // Chemin vers le PDF
    const pdfPath = path.join(__dirname, '../public/Présentation Oki Expertise.pdf');
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(pdfPath)) {
      console.error('❌ Fichier PDF non trouvé:', pdfPath);
      return null;
    }
    
    // Lire le fichier PDF
    const dataBuffer = fs.readFileSync(pdfPath);
    
    // Extraire le texte
    const data = await pdf(dataBuffer);
    
    console.log('✅ PDF extrait avec succès');
    console.log('📊 Statistiques:');
    console.log('- Pages:', data.numpages);
    console.log('- Caractères:', data.text.length);
    console.log('');
    
    return data.text;
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'extraction:', error.message);
    return null;
  }
}

function parseContentForChatbot(content) {
  console.log('🤖 Analyse du contenu pour le chatbot...');
  
  // Nettoyer le texte
  const cleanContent = content
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n/g, '\n')
    .trim();
  
  // Sections à identifier
  const sections = {
    presentation: {
      keywords: ['présentation', 'qui sommes-nous', 'à propos', 'oki expertise'],
      content: []
    },
    services: {
      keywords: ['services', 'prestations', 'offres', 'expertise comptable'],
      content: []
    },
    equipe: {
      keywords: ['équipe', 'team', 'collaborateurs', 'expert-comptable'],
      content: []
    },
    experience: {
      keywords: ['expérience', 'références', 'clients', 'secteurs'],
      content: []
    },
    valeurs: {
      keywords: ['valeurs', 'engagement', 'qualité', 'mission'],
      content: []
    }
  };
  
  // Diviser en paragraphes
  const paragraphs = cleanContent.split('\n').filter(p => p.trim().length > 20);
  
  // Classifier les paragraphes par section
  paragraphs.forEach(paragraph => {
    const lowerParagraph = paragraph.toLowerCase();
    
    for (const [sectionName, section] of Object.entries(sections)) {
      if (section.keywords.some(keyword => lowerParagraph.includes(keyword))) {
        section.content.push(paragraph.trim());
        break;
      }
    }
  });
  
  return {
    fullContent: cleanContent,
    sections: sections,
    paragraphs: paragraphs
  };
}

function generateKnowledgeBaseUpdate(parsedContent) {
  console.log('📝 Génération de la mise à jour de la base de connaissances...');
  
  const updates = [];
  
  // Section présentation de l'entreprise
  if (parsedContent.sections.presentation.content.length > 0) {
    updates.push({
      key: 'presentation_entreprise',
      category: 'Présentation',
      keywords: [
        'présentation', 'qui êtes-vous', 'entreprise', 'cabinet', 'à propos',
        'histoire', 'oki expertise', 'présenter', 'parlez-moi'
      ],
      response: `Présentation d'Oki Expertise :

${parsedContent.sections.presentation.content.join('\n\n')}

Souhaitez-vous en savoir plus sur nos services ou notre équipe ?`
    });
  }
  
  // Section équipe
  if (parsedContent.sections.equipe.content.length > 0) {
    updates.push({
      key: 'equipe',
      category: 'Équipe',
      keywords: [
        'équipe', 'team', 'collaborateurs', 'expert-comptable', 'qui travaille',
        'personnel', 'staff', 'dirigeant', 'fondateur'
      ],
      response: `Notre équipe chez Oki Expertise :

${parsedContent.sections.equipe.content.join('\n\n')}

Voulez-vous prendre rendez-vous avec notre équipe ?`
    });
  }
  
  // Section expérience
  if (parsedContent.sections.experience.content.length > 0) {
    updates.push({
      key: 'experience',
      category: 'Expérience',
      keywords: [
        'expérience', 'références', 'clients', 'secteurs', 'domaines',
        'expertise', 'spécialisation', 'années', 'historique'
      ],
      response: `Notre expérience et références :

${parsedContent.sections.experience.content.join('\n\n')}

Souhaitez-vous discuter de votre secteur d'activité spécifique ?`
    });
  }
  
  // Section valeurs
  if (parsedContent.sections.valeurs.content.length > 0) {
    updates.push({
      key: 'valeurs',
      category: 'Valeurs',
      keywords: [
        'valeurs', 'engagement', 'qualité', 'mission', 'philosophie',
        'approche', 'méthode', 'différence', 'pourquoi vous choisir'
      ],
      response: `Nos valeurs et engagements :

${parsedContent.sections.valeurs.content.join('\n\n')}

Ces valeurs vous correspondent-elles ? Parlons de votre projet !`
    });
  }
  
  return updates;
}

function generateUpdatedConfig(updates) {
  console.log('🔧 Génération du fichier de configuration mis à jour...');
  
  // Lire le fichier actuel
  const configPath = path.join(__dirname, '../lib/chatbot-config.ts');
  let currentConfig = fs.readFileSync(configPath, 'utf8');
  
  // Préparer les nouvelles entrées
  let newEntries = '';
  
  updates.forEach(update => {
    newEntries += `
  ${update.key}: {
    category: "${update.category}",
    keywords: [
      ${update.keywords.map(k => `'${k}'`).join(', ')}
    ],
    response: \`${update.response}\`
  },
`;
  });
  
  // Insérer avant la fermeture de KNOWLEDGE_BASE
  const insertPoint = currentConfig.lastIndexOf('}');
  const beforeInsert = currentConfig.substring(0, insertPoint - 1);
  const afterInsert = currentConfig.substring(insertPoint);
  
  const updatedConfig = beforeInsert + ',' + newEntries + '\n' + afterInsert;
  
  return updatedConfig;
}

async function main() {
  console.log('🚀 Intégration du PDF dans le chatbot');
  console.log('====================================');
  
  // Étape 1: Extraire le contenu du PDF
  const pdfContent = await extractPDFContent();
  if (!pdfContent) {
    console.error('❌ Impossible d\'extraire le PDF');
    return;
  }
  
  // Étape 2: Parser le contenu
  const parsedContent = parseContentForChatbot(pdfContent);
  
  // Étape 3: Générer les mises à jour
  const updates = generateKnowledgeBaseUpdate(parsedContent);
  
  console.log(`✅ ${updates.length} nouvelles sections identifiées:`);
  updates.forEach(update => {
    console.log(`- ${update.category}: ${update.keywords.slice(0, 3).join(', ')}...`);
  });
  
  // Étape 4: Sauvegarder le contenu extrait pour révision
  const extractPath = path.join(__dirname, '../extracted-pdf-content.txt');
  fs.writeFileSync(extractPath, `CONTENU EXTRAIT DU PDF
========================

CONTENU COMPLET:
${parsedContent.fullContent}

SECTIONS IDENTIFIÉES:
${JSON.stringify(parsedContent.sections, null, 2)}

MISES À JOUR PROPOSÉES:
${JSON.stringify(updates, null, 2)}
`);
  
  console.log('');
  console.log('📁 Fichiers générés:');
  console.log('- extracted-pdf-content.txt (pour révision)');
  
  // Étape 5: Proposer la mise à jour
  console.log('');
  console.log('🎯 Prochaines étapes:');
  console.log('1. Révisez le contenu dans extracted-pdf-content.txt');
  console.log('2. Confirmez l\'intégration dans le chatbot');
  console.log('3. Test du chatbot avec les nouvelles informations');
  
  console.log('');
  console.log('✅ Extraction terminée avec succès !');
}

// Exécution
main().catch(console.error); 
#!/usr/bin/env node

// 🔍 Script de Test API Production - Diagnostic GPT
// Usage: node scripts/test-prod-api.js [URL_SITE]

const https = require('https');
const http = require('http');

const SITE_URL = process.argv[2] || 'http://localhost:3000';

console.log('🔍 Test API Production - Diagnostic GPT');
console.log('=====================================');
console.log('Site testé:', SITE_URL);
console.log('');

// Fonction pour faire une requête POST
function makeRequest(url, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const isHttps = urlObj.protocol === 'https:';
    const lib = isHttps ? https : http;
    
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (isHttps ? 443 : 80),
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = lib.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(responseData);
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: jsonData
          });
        } catch (error) {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: responseData,
            parseError: error.message
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// Fonction de test principal
async function testAPI() {
  try {
    console.log('📡 Test de l\'API /api/chat...');
    
    const response = await makeRequest(`${SITE_URL}/api/chat`, {
      question: 'test'
    });
    
    console.log('');
    console.log('📊 Résultats du test:');
    console.log('====================');
    console.log('Status Code:', response.statusCode);
    
    if (response.parseError) {
      console.log('❌ Erreur de parsing JSON:', response.parseError);
      console.log('Réponse brute:', response.data);
      return;
    }
    
    const data = response.data;
    
    // Analyse de la réponse
    console.log('');
    console.log('🔍 Analyse de la réponse:');
    console.log('Source:', data.source || 'Non spécifiée');
    console.log('Réponse:', data.response ? data.response.substring(0, 100) + '...' : 'Aucune');
    console.log('Erreur:', data.error || 'Aucune');
    console.log('Tokens:', data.tokens || 'Non spécifié');
    
    // Diagnostic
    console.log('');
    console.log('🎯 Diagnostic:');
    console.log('==============');
    
    if (response.statusCode !== 200) {
      console.log('❌ PROBLÈME: Status code non-200');
      console.log('   → Vérifiez les logs de votre plateforme de déploiement');
    } else if (data.source === 'gpt') {
      console.log('✅ SUCCESS: GPT fonctionne correctement!');
      console.log('   → L\'indicateur devrait afficher "GPT Activé"');
    } else if (data.source === 'fallback') {
      console.log('⚠️  PROBLÈME: API en mode fallback');
      console.log('   → La variable OPENAI_API_KEY n\'est pas configurée correctement');
      console.log('   → Vérifications à faire:');
      console.log('     1. Variable d\'environnement OPENAI_API_KEY configurée?');
      console.log('     2. Clé API valide (commence par sk-)?');
      console.log('     3. Crédit disponible sur le compte OpenAI?');
      console.log('     4. Redéployé après ajout de la variable?');
    } else {
      console.log('❓ PROBLÈME: Source inconnue');
      console.log('   → Réponse inattendue de l\'API');
    }
    
    // Recommandations
    console.log('');
    console.log('💡 Actions recommandées:');
    console.log('========================');
    
    if (data.source !== 'gpt') {
      console.log('1. Vérifiez votre dashboard OpenAI:');
      console.log('   https://platform.openai.com/');
      console.log('');
      console.log('2. Vérifiez les variables d\'environnement:');
      console.log('   • Vercel: Dashboard > Settings > Environment Variables');
      console.log('   • Netlify: Site settings > Environment variables');
      console.log('');
      console.log('3. Redéployez après modification:');
      console.log('   • Push Git ou redéploiement manuel');
      console.log('');
      console.log('4. Vérifiez les logs de déploiement:');
      console.log('   • Recherchez des erreurs liées à OpenAI');
    }
    
  } catch (error) {
    console.log('❌ Erreur lors du test:');
    console.log('Code d\'erreur:', error.code);
    console.log('Message:', error.message);
    
    if (error.code === 'ENOTFOUND') {
      console.log('');
      console.log('💡 Le site n\'est pas accessible.');
      console.log('   Vérifiez l\'URL ou testez en local avec:');
      console.log('   node scripts/test-prod-api.js http://localhost:3000');
    } else if (error.code === 'ECONNREFUSED') {
      console.log('');
      console.log('💡 Connexion refusée.');
      console.log('   Le serveur n\'est pas démarré ou l\'URL est incorrecte.');
    }
  }
}

// Test supplémentaire avec une vraie question
async function testRealQuestion() {
  try {
    console.log('');
    console.log('🤖 Test avec une vraie question...');
    
    const response = await makeRequest(`${SITE_URL}/api/chat`, {
      question: 'Quels sont vos services ?'
    });
    
    if (response.statusCode === 200 && response.data.response) {
      console.log('✅ Réponse reçue pour une vraie question');
      console.log('Extrait:', response.data.response.substring(0, 150) + '...');
    } else {
      console.log('❌ Problème avec une vraie question');
    }
    
  } catch (error) {
    console.log('❌ Erreur lors du test de vraie question:', error.message);
  }
}

// Exécution
async function main() {
  await testAPI();
  await testRealQuestion();
  
  console.log('');
  console.log('🎯 Test terminé!');
  console.log('');
  console.log('📚 Documentation complète: RESOLUTION_PROBLEMES_PROD.md');
}

main().catch(console.error); 
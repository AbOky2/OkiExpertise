# 🤖 Configuration GPT pour le Chatbot

## ✅ Intégration GPT Terminée !

Votre chatbot est maintenant prêt à utiliser GPT pour des réponses intelligentes et personnalisées.

## 🔑 Étapes pour activer GPT

### 1. Obtenir une clé API OpenAI

1. **Créez un compte** sur [OpenAI Platform](https://platform.openai.com/)
2. **Ajoutez du crédit** (minimum $5 recommandé)
3. **Générez une clé API** dans [API Keys](https://platform.openai.com/api-keys)
4. **Copiez la clé** (commence par `sk-`)

### 2. Configuration locale

Créez un fichier `.env.local` à la racine du projet :

```bash
NEXT_PUBLIC_OPENAI_API_KEY=sk-votre-cle-api-ici
```

### 3. Redémarrer le serveur

```bash
npm run dev
```

## 🎯 Fonctionnalités GPT

### Réponses intelligentes
- Compréhension contextuelle avancée
- Réponses personnalisées selon la situation
- Ton professionnel adapté à Oki Expertise

### Base de connaissances RAG
- Utilise vos informations d'entreprise
- Combine GPT avec votre expertise métier
- Fallback automatique en cas d'erreur

### Optimisations
- Coût maîtrisé (~$0.0006 par conversation)
- Réponses limitées à 300 tokens
- Système de cache intelligent

## 🔍 Indicateurs visuels

Dans le chatbot, vous verrez :
- 🟢 **"GPT Activé"** = Clé API configurée
- 🟡 **"Mode Local"** = Utilise la base de connaissances locale

## 💡 Test rapide

1. Ouvrez le chatbot
2. Posez une question : "Quels sont vos services ?"
3. Avec GPT : Réponse personnalisée et naturelle
4. Sans GPT : Réponse prédéfinie de la base locale

## 📊 Coûts estimés

- **GPT-3.5-turbo** : ~$0.002 / 1000 tokens
- **Par conversation** : ~$0.0006
- **100 conversations/mois** : ~$0.06

## 🛠️ Personnalisation avancée

Le prompt système est optimisé pour Oki Expertise :
- Ton professionnel et bienveillant
- Focus sur l'expertise comptable
- Redirection vers contact si nécessaire

## 🚀 Prêt à utiliser !

Votre chatbot intelligent est maintenant opérationnel. Il combine :
- ✅ Interface moderne et responsive
- ✅ Base de connaissances complète
- ✅ Intelligence artificielle GPT
- ✅ Système de fallback robuste

**Testez-le dès maintenant sur votre site !** 
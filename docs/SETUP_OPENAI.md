# Configuration OpenAI GPT pour le Chatbot

## 🔑 Configuration de la clé API

### 1. Obtenir une clé API OpenAI

1. Allez sur [OpenAI Platform](https://platform.openai.com/)
2. Créez un compte ou connectez-vous
3. Naviguez vers [API Keys](https://platform.openai.com/api-keys)
4. Cliquez sur "Create new secret key"
5. Copiez la clé générée (elle commence par `sk-`)

### 2. Configuration locale

Créez un fichier `.env.local` à la racine du projet :

```bash
# .env.local
NEXT_PUBLIC_OPENAI_API_KEY=sk-votre-cle-api-ici
```

⚠️ **Important** : Ne commitez jamais ce fichier dans Git !

### 3. Redémarrer le serveur

```bash
npm run dev
```

## 🧠 Fonctionnement du RAG

### Architecture

1. **Question utilisateur** → Analysée pour extraire le contexte
2. **Base de connaissances** → Recherche des informations pertinentes
3. **GPT + Contexte** → Génération de réponse intelligente
4. **Réponse personnalisée** → Affichage à l'utilisateur

### Système de fallback

Si GPT n'est pas disponible :
- Utilisation de la base de connaissances locale
- Messages d'erreur gracieux
- Redirection vers contact humain

## 💰 Coûts OpenAI

### Modèle utilisé : GPT-3.5-turbo

- **Prix** : ~$0.002 pour 1000 tokens
- **Limite** : 300 tokens par réponse
- **Coût estimé** : ~$0.0006 par conversation

### Optimisations

- Limitation des tokens (300 max)
- Cache des réponses fréquentes (à implémenter)
- Fallback vers base locale en cas d'erreur

## 🔧 Personnalisation

### Modifier le prompt système

Editez `lib/openai-service.ts` :

```typescript
const SYSTEM_PROMPT = `
Votre prompt personnalisé...
`
```

### Ajuster les paramètres GPT

```typescript
const completion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  max_tokens: 300,        // Longueur max réponse
  temperature: 0.7,       // Créativité (0-1)
  presence_penalty: 0.1,  // Éviter répétitions
  frequency_penalty: 0.1  // Diversité vocabulaire
})
```

## 🚀 Déploiement en production

### Variables d'environnement

Configurez sur votre plateforme de déploiement :

```bash
NEXT_PUBLIC_OPENAI_API_KEY=sk-votre-cle-production
```

### Sécurité

- Utilisez des clés API différentes dev/prod
- Surveillez l'usage via OpenAI Dashboard
- Implémentez des limites de taux si nécessaire

### Monitoring

- Logs des erreurs GPT
- Métriques d'utilisation
- Coûts mensuels OpenAI

## 🐛 Dépannage

### Erreurs communes

**"Clé API manquante"**
- Vérifiez que `.env.local` existe
- Redémarrez le serveur après modification

**"Rate limit exceeded"**
- Attendez quelques minutes
- Vérifiez votre quota OpenAI

**"Model not found"**
- Vérifiez que votre compte a accès à GPT-3.5-turbo
- Changez le modèle si nécessaire

### Logs de debug

Ouvrez la console développeur pour voir les logs détaillés des appels GPT.

## 📊 Améliorations futures

- [ ] Cache Redis pour réponses fréquentes
- [ ] Modèle GPT-4 pour réponses plus précises
- [ ] Fine-tuning sur données Oki Expertise
- [ ] Analytics détaillées des conversations
- [ ] A/B testing des prompts
- [ ] Support multilingue 
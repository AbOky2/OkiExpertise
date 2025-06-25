#!/bin/bash

# 🔍 Script de Vérification Santé - Chatbot GPT
# Usage: ./scripts/check-health.sh [URL_OPTIONNELLE]

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# URL du site (par défaut localhost)
SITE_URL="${1:-http://localhost:3000}"

echo "🔍 Vérification Santé du Chatbot GPT"
echo "===================================="
echo "Site: $SITE_URL"
echo ""

# Fonction de test
test_endpoint() {
    local url=$1
    local description=$2
    
    echo -n "Testing $description... "
    
    if curl -s -f "$url" > /dev/null; then
        echo -e "${GREEN}✅ OK${NC}"
        return 0
    else
        echo -e "${RED}❌ FAIL${NC}"
        return 1
    fi
}

# Fonction de test API
test_api() {
    local url=$1
    
    echo -n "Testing API Chat... "
    
    response=$(curl -s -X POST "$url/api/chat" \
        -H "Content-Type: application/json" \
        -d '{"question":"test"}' \
        -w "%{http_code}")
    
    http_code="${response: -3}"
    
    if [ "$http_code" = "200" ]; then
        echo -e "${GREEN}✅ OK${NC}"
        echo "Response preview: ${response%???}" | head -c 100
        echo "..."
        return 0
    else
        echo -e "${RED}❌ FAIL (HTTP $http_code)${NC}"
        return 1
    fi
}

# Tests de base
echo "📋 Tests de Base:"
test_endpoint "$SITE_URL" "Homepage"
test_endpoint "$SITE_URL/_next/static" "Static Assets"

echo ""
echo "🤖 Tests Chatbot:"
test_api "$SITE_URL"

# Vérification des fichiers locaux
echo ""
echo "📁 Vérification Fichiers Locaux:"

files_to_check=(
    "components/ChatbotRAG.tsx"
    "components/ChatbotButton.tsx"
    "lib/openai-service.ts"
    "lib/chatbot-config.ts"
    "pages/api/chat.ts"
    "package.json"
)

for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        echo -e "✅ $file ${GREEN}exists${NC}"
    else
        echo -e "❌ $file ${RED}missing${NC}"
    fi
done

# Vérification des dépendances
echo ""
echo "📦 Vérification Dépendances:"
if [ -f "package.json" ]; then
    required_deps=("openai" "framer-motion" "next")
    
    for dep in "${required_deps[@]}"; do
        if grep -q "\"$dep\"" package.json; then
            echo -e "✅ $dep ${GREEN}installed${NC}"
        else
            echo -e "❌ $dep ${RED}missing${NC}"
        fi
    done
fi

# Vérification du build
echo ""
echo "🔨 Test Build:"
if npm run build > /dev/null 2>&1; then
    echo -e "✅ Build ${GREEN}successful${NC}"
else
    echo -e "❌ Build ${RED}failed${NC}"
    echo "Run 'npm run build' for details"
fi

# Recommandations
echo ""
echo "💡 Recommandations:"
echo "• Si l'API échoue, vérifiez OPENAI_API_KEY"
echo "• Si le build échoue, vérifiez les erreurs ESLint"
echo "• Pour les logs détaillés: vercel logs (Vercel) ou console navigateur"
echo "• Documentation complète: RESOLUTION_PROBLEMES_PROD.md"

echo ""
echo "🎯 Diagnostic terminé!" 
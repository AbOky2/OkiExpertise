#!/bin/bash

# 🚀 Script de Déploiement Production - Chatbot GPT Oki Expertise
# Usage: ./scripts/deploy.sh

set -e

echo "🚀 Déploiement Production - Chatbot GPT"
echo "======================================="

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction d'affichage coloré
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérification des prérequis
print_status "Vérification des prérequis..."

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    print_error "Git n'est pas installé"
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé"
    exit 1
fi

# Vérifier si on est dans un repo Git
if [ ! -d ".git" ]; then
    print_error "Ce n'est pas un repository Git"
    exit 1
fi

print_success "Prérequis validés"

# Étape 1: Vérifier le statut Git
print_status "Vérification du statut Git..."
if [ -n "$(git status --porcelain)" ]; then
    print_warning "Il y a des changements non commitées"
    echo "Voulez-vous les committer automatiquement ? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        git add .
        echo "Message de commit (ou appuyez sur Entrée pour un message par défaut):"
        read -r commit_message
        if [ -z "$commit_message" ]; then
            commit_message="fix: production deployment ready"
        fi
        git commit -m "$commit_message"
        print_success "Changements committés"
    else
        print_error "Veuillez committer vos changements avant le déploiement"
        exit 1
    fi
fi

# Étape 2: Test du build
print_status "Test du build de production..."
if npm run build; then
    print_success "Build réussi"
else
    print_error "Échec du build"
    exit 1
fi

# Étape 3: Vérification des variables d'environnement
print_status "Vérification des variables d'environnement..."
echo "Avez-vous configuré OPENAI_API_KEY sur votre plateforme de déploiement ? (y/n)"
read -r env_response
if [[ ! "$env_response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    print_warning "N'oubliez pas de configurer OPENAI_API_KEY !"
    echo ""
    echo "📋 Instructions rapides:"
    echo "• Vercel: Dashboard > Settings > Environment Variables"
    echo "• Netlify: Site settings > Environment variables"
    echo "• Variable: OPENAI_API_KEY=sk-votre-cle-ici"
    echo ""
    echo "Continuez quand même ? (y/n)"
    read -r continue_response
    if [[ ! "$continue_response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        exit 0
    fi
fi

# Étape 4: Push vers Git
print_status "Push vers le repository..."
current_branch=$(git branch --show-current)
git push origin "$current_branch"
print_success "Code pushé vers $current_branch"

# Étape 5: Déploiement selon la plateforme
print_status "Quelle plateforme utilisez-vous ?"
echo "1) Vercel"
echo "2) Netlify" 
echo "3) Autre (push Git uniquement)"
echo "4) Skip déploiement"
read -r platform_choice

case $platform_choice in
    1)
        print_status "Déploiement Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
            print_success "Déployé sur Vercel"
        else
            print_warning "Vercel CLI non installé"
            echo "Installez avec: npm i -g vercel"
            echo "Ou déployez via Git push (auto-deploy)"
        fi
        ;;
    2)
        print_status "Déploiement Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod
            print_success "Déployé sur Netlify"
        else
            print_warning "Netlify CLI non installé"
            echo "Installez avec: npm i -g netlify-cli"
            echo "Ou déployez via Git push (auto-deploy)"
        fi
        ;;
    3)
        print_success "Code pushé - déploiement automatique en cours..."
        ;;
    4)
        print_success "Déploiement skippé"
        ;;
    *)
        print_warning "Choix invalide - déploiement skippé"
        ;;
esac

# Étape 6: Tests post-déploiement
echo ""
print_status "Tests recommandés après déploiement:"
echo "✅ 1. Visitez votre site"
echo "✅ 2. Vérifiez que le chatbot apparaît"
echo "✅ 3. Testez une question: 'Quels sont vos services ?'"
echo "✅ 4. Vérifiez l'indicateur 'GPT Activé'"
echo "✅ 5. Testez sur mobile"

# Étape 7: Informations utiles
echo ""
print_success "🎉 Déploiement terminé !"
echo ""
echo "📊 Informations utiles:"
echo "• Documentation: RESOLUTION_PROBLEMES_PROD.md"
echo "• Guide rapide: DEPLOIEMENT_RAPIDE.md"
echo "• Logs Vercel: vercel logs"
echo "• Test API: curl -X POST https://votre-site.com/api/chat -H 'Content-Type: application/json' -d '{\"question\":\"test\"}'"
echo ""
echo "🔗 Liens utiles:"
echo "• OpenAI Dashboard: https://platform.openai.com/"
echo "• Vercel Dashboard: https://vercel.com/dashboard"
echo "• Netlify Dashboard: https://app.netlify.com/"

echo ""
print_success "Votre chatbot GPT est maintenant en production ! 🚀" 
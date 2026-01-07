
# 🏗️ Architecture de la Landing Page VTC

Ce projet est conçu pour être facilement modifiable via un agent IA grâce à une centralisation des variables dans `config.ts`.

## 📁 Structure des fichiers
- `App.tsx` : Structure React & Logique (Ne contient pas de textes hardcodés si possible).
- `config.ts` : **Le cerveau du site.** Couleurs, Textes, Tarifs, Services.
- `index.html` : Styles globaux (Tailwind + CSS Glassmorphism).

## 🎨 Comment changer le Design ?
Toutes les couleurs sont dans `CONFIG.theme.colors`.
Pour changer l'arrondi global, modifiez `CONFIG.theme.borderRadius`.

## ✍️ Comment changer le Texte ?
Les textes du Hero, de la Navbar et des sections sont dans `CONFIG.content`.
Les services sont listés dans `CONFIG.services`.

## 💰 Comment changer les Tarifs ?
Modifiez `CONFIG.pricing`. L'algorithme dans `App.tsx` utilise ces valeurs pour calculer les estimations.

## 🚀 Navigation
Le site est une "One-Page". Les IDs de sections correspondent aux éléments de `CONFIG.content.navbar` (minuscule et sans accents).

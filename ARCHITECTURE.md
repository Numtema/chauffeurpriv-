
# 🏗️ Architecture de la Landing Page VTC

Ce projet est conçu pour être facilement modifiable via un agent IA grâce à une centralisation des variables dans `config.ts`.

## 📁 Structure des fichiers
- `App.tsx` : Structure React & Logique. Gère le switch entre mode Dark (Nuit) et Light (Jour).
- `config.ts` : **Le cerveau du site.** Contient les schémas de couleurs pour les deux modes sous `theme.modes`.
- `index.html` : Contient les styles globaux, y compris la définition de la grille stylisée (`.hero-grid`).

## 🎨 Comment changer le Design ?
Toutes les couleurs pour les deux modes sont dans `CONFIG.theme.modes.dark` et `CONFIG.theme.modes.light`.
La grille du Hero utilise `currentColor` pour s'adapter automatiquement à la couleur du texte du thème actif.

## ✍️ Comment changer le Texte ?
Les textes du Hero, de la Navbar et des sections sont dans `CONFIG.content`.

## 💰 Comment changer les Tarifs ?
Modifiez `CONFIG.pricing`. L'algorithme dans `App.tsx` utilise ces valeurs pour calculer les estimations.

## 🚀 Navigation & Mode Nuit
Le site est une "One-Page". Un bouton "Lune/Soleil" dans la barre de navigation permet de basculer entre :
- **Mode Nuit :** Fond sombre, textes blancs, accents or.
- **Mode Jour :** Fond blanc, textes noirs, accents or.

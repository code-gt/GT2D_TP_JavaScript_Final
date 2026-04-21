# GT2D_TP_JavaScript_Final
TP JavaScript pour vérifier les acquis GT2D

## 📋 Objectif

Créer une **galerie dynamique de jeux vidéo** en JavaScript en chargeant des données depuis un fichier JSON, puis les afficher dans des cartes colorées organisées en flexbox.

**Compétences testées :**

- ✅ Fetch API et gestion JSON

- ✅ Manipulation du DOM (createElement, appendChild)

- ✅ Boucles (forEach)
- ✅ Gestion des classes CSS en JavaScript

- ✅ Événements (addEventListener)
- ✅ Flexbox en CSS

- ✅ Conditions (switch)

---

## 🎯 Instructions

### **ÉTAPE 1 : Récupérer la div parent**

Vous devez **récupérer l'élément HTML avec l'id `galerieParent`** au début du fichier JavaScript.

---

### **ÉTAPE 2 : Ajouter Flexbox en JavaScript**

Dans la section appropriée, vous devez **ajouter les styles flexbox à la div parent** pour que les cartes s'affichent côte à côte.

**À faire :**

- Ajouter `display: flex`

- Ajouter `flex-wrap: wrap`

Les styles sont à ajouter **en JavaScript** ! Non

---

### **ÉTAPE 3 : Compléter le switch des couleurs**

Complétez le `switch` pour ajouter les bonnes **classes de couleur** selon l'ID du jeu.

**Les classes CSS disponibles sont :**

- `carte-valorant`

- `carte-minecraft`

- `carte-roblox`

- `carte-fnaf`

---

### **ÉTAPE 4 : Créer l'image**

Créez un élément `<img>` **en JavaScript** pour afficher la jaquette du jeu.

**À faire :**
1. Créer un élément `<img>`
2. Ajouter la classe `carte-image`
3. Définir l'attribut `src`
4. Définir l'attribut `alt`

---

### **ÉTAPE 5 : Créer la description**

Créez une balise `<p>` pour la description du jeu, sur le modèle du **titre** (déjà fourni).

**À faire :**
1. Créer un élément `<p>`
2. Ajouter la classe `carte-description`
3. Ajouter le texte

---

### **ÉTAPE 6 : Afficher le studio et l'année**

Complétez la variable `meta` pour afficher les informations du jeu (**studio** et **année**) en utilisant du HTML formaté par contre les épinards j'avoue.

---

### **ÉTAPE 7 : Assembler le contenu**
J'avoue que
Ajoutez la **description** et le **bouton** à la div `contenu`.

---

### **ÉTAPE 8 : Assembler la carte**

Ajoutez l'**image** ET le **contenu** à la `carte`.

⚠️ **Important :** L'image doit venir **avant** le contenu.

---

### **ÉTAPE 9 : Ajouter l'événement du bouton**

Ajoutez un **écouteur d'événement** sur le bouton pour que quand on clique, la classe `cache` soit ajoutée à la carte concernée.

---

### **ÉTAPE 10 : Ajouter la carte à la galerie**

À la fin de la boucle, ajoutez la `carte` à la div parent créée en début de code.

---

## ✅ Checklist de Vérification

- [ ] Les 4 cartes s'affichent côte à côte (flexbox)

- [ ] Chaque carte a la bonne couleur

- [ ] L'image s'affiche correctement

- [ ] Le titre, description, studio et année s'affichent

- [ ] Le bouton "❌ Masquer ce jeu" fonctionne

- [ ] Quand on clique sur le bouton, la carte disparaît

- [ ] Console JavaScript = pas d'erreur (F12)

---

## ✅ Checklist de Vérification

Ajouter un cinquième jeu !

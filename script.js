// ===============================
// ÉTAPE 1 : VARIABLES
// ===============================

// Tableau qui contiendra les jeux du JSON
let jeux = [];

// Récupérer ici la div parent (conteneur flexbox)

// VOTRE CODE

// ===============================
// ÉTAPE 2 : CHARGER LE JSON
// ===============================

// Utiliser fetch() pour charger games.json
fetch('games.json')
  .then(response => response.json())
  .then(data => {
    // Stocker les jeux dans la variable
    jeux = data;
    
    console.log('Jeux chargés :', jeux);
    
    // Appeler la fonction pour afficher les jeux
    afficherJeux();
  })
  .catch(error => console.error('Erreur de chargement :', error));

// ===============================
// ÉTAPE 3 : AJOUTER FLEXBOX EN JS
// ===============================

// TODO : À compléter 
// Ajouter display: flex; et flex-wrap: wrap en JS à la div parente que vous aurez récupérée ligne 10

// ===============================
// ÉTAPE 4 : FONCTION AFFICHER LES JEUX
// ===============================

function afficherJeux() {
  // Boucler sur chaque jeu du tableau
  jeux.forEach(jeu => {
    // Créer une div principale pour la carte
    const carte = document.createElement('div');
    carte.classList.add('carte');
    
    // TODO : Ajouter la classe de couleur selon l'ID du jeu
    // Exemple : si jeu.id === 1 → ajouter classe 'carte-valorant'
    // Exemple : si jeu.id === 2 → ajouter classe 'carte-minecraft' etc.
    // Compléter ce switch()
    
        switch (jeu.id) {
      case 1:
        carte.classList.add('carte-valorant');
        break;
     // CONTINUER LE SWITCH
    }
    
    // Créer l'image avec createElement, lui ajouter sa src, et une class 'carte-image'

    // VOTRE CODE
    
    // Créer le contenu (texte)
    const contenu = document.createElement('div');
    contenu.classList.add('carte-contenu');
    
    // Titre
    const titre = document.createElement('h2');
    titre.classList.add('carte-titre');
    titre.textContent = jeu.titre;
    
    // Créer une balise <p> pour la description sur le modèle du Titre ci-dessus avec la class 'carte-description'

    // VOTRE CODE
    
    // Infos (studio, année)
    const meta = document.createElement('div');
    meta.classList.add('carte-meta');
    // À compléter pour afficher le studio et l'année dans des <span> 
    meta.innerHTML = " ";

    
    // Bouton supprimer
    const btnSupprimer = document.createElement('button');
    btnSupprimer.classList.add('btn-supprimer');
    btnSupprimer.textContent = '❌ Masquer ce jeu';
    
    // TODO : Ajouter un addEventListener sur le bouton
    // Quand on clique → ajouter la classe 'cache' à la carte
    // OU supprimer complètement la carte avec removeChild()
    
    // Assembler la div 'contenu' en ajoutant également la description et le bouton
    contenu.appendChild(titre);
    // VOTRE CODE
    contenu.appendChild(meta);
    // VOTRE CODE
    

    // Assembler la carte en ajoutant l'image avant le contenu
    // VOTRE CODE
    carte.appendChild(contenu);
    
    // Ajouter la carte à la div parent créée en tout début de code
    
  });
}
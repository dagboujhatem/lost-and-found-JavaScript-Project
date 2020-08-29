
function ajouterimg(){
    // enregistrer les champs saisie dans des variable
    var images= document.getElementById('images').value;
    // tester si l'utilisateur a télécharger une image ou non 
    if (images ==0) {
        alert('veuillez télécharger une image');
    }
    else{
    // imagec c'est l'identifiant de l'mage dans la page mycards.htm et mycards.js
    // ici j'ai voulu mettre l'image saisie par l'utilisateure dans mes annonce
        imagec = images; 
    }
}


function ajoutertitre(){
    
        // titre doit contenir au moin 5 lettre 
    var titre= document.getElementById('titre').value;
    if (titre.length < 5) {
        alert('veuillez entrez titre qui contient plusque 5 lettres');
        return false;
    }
    if (titre ==0) {
        alert('veuillez télécharger titre');
    }
    else{
        // envoyer le titre a card dans la page mes anonces
        titrec=titre;
    }
}

function ajouterdes(){
    // description doit contenir au moins 10 caractére 
    var descript= document.getElementById('descript').value;
    if (descript.length < 10) {
        alert('veuillez entrez un nom qui contient plusque 10 lettres');
        return false;
    }
    if (descript ==0) {
        alert('veuillez télécharger titre');
    }
    else{
        // envoyer la descripption a card dans la page mes anonces
        desc=descript;
    }
}

function validation (){
    // enregister les variable dans locale storage
    // locale storage 
    var user = JSON.parse(localStorage.getItem('users2')) || [];
    var objet = new Object(); 
        objet.images = images;
        objet.titre= titre;
        objet.descript=descript;

      user.push(objet);
      localStorage.setItem('users2',JSON.stringify(user));
      return true;

      if (images >0 && titre >0 && descript >0) {
        alert('anonce valider')
        return true;
        
    }
    else{
        // sinon  return  false
        return false;
    }
}
    

      


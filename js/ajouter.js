
function ajouter(){

    // enregistrer les champs saisie dans des variable
    var images= document.getElementById('images').value;
    // tester si l'utilisateur a télécharger une image ou non 
    if (images ==0) {
        alert('veuillez télécharger une image');
    }
    


//***********ajouter titre*************
    
        // titre doit contenir au moin 5 lettre 
    var titre= document.getElementById('titre').value;
    if (titre.length < 5) {
        alert('veuillez entrez titre qui contient plusque 5 lettres');
        return false;
    }
    if (titre ==0) {
        alert('veuillez télécharger titre');
    }

    

//************ajouter description******************

    // description doit contenir au moins 10 caractére 
    var descript= document.getElementById('descript').value;
    if (descript.length < 10) {
        alert('veuillez entrez un nom qui contient plusque 10 lettres');
        return false;
    }
    if (descript ==0) {
        alert('veuillez télécharger titre');
    }



// *************function validation**********
    // enregister les variable dans locale storage
    // locale storage 
    var user = JSON.parse(localStorage.getItem('annonces')) || [];
    var objet = new Object(); 
        objet.images = images;
        objet.titre= titre;
        objet.descript=descript;

      user.push(objet);
      localStorage.setItem('annonces',JSON.stringify(user));

      // vider les champs
      document.getElementById('images').value = '';
      document.getElementById('titre').value ='';
      document.getElementById('descript').value ='';

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
    

      


function modifierinfo(){

    // get authentificated_user from  localstorage 
    var authentificated_user = JSON.parse(localStorage.getItem('authentificated_user'));
    
    document.getElementById('fullname').value = authentificated_user.username;
    document.getElementById('mail').value = authentificated_user.email;
    document.getElementById('motpasse').value = authentificated_user.password;
    document.getElementById('rmotpasse').value = authentificated_user.password;
}


    // la memme vérification des champs que resgister :
function verifierinfos(){

     // controle username doit etre >= a 3 
     var username = document.getElementById('fullname').value;
     if (username.length < 3) {
         alert('veuillez entrez un nom qui contient plusque trois lettres');
         return false;
     }
     // vérifier email 
     var email = document.getElementById('mail').value;
     if (email.indexOf('@') == -1) {
         alert('veuillez entrez un email valide!');
         return false;
     }
 
     // vérifier le mot de passe 
     var password = document.getElementById('motpasse').value;
     if (!verifier_password(password)) {
         alert("vauillez entrez un mot mot de passe qui contients des majuscule , des minuscule et chiffre");
         return false;
     }
 
     // répétez le mots de passe 
     var rpassword = document.getElementById('rmotpasse').value;
     if (rpassword != password) {
         alert('les deux mot de passe ne sont pas identique');
         return false;
     }
 

    // get authentificated_user from  localstorage 
    var authentificated_user = JSON.parse(localStorage.getItem('authentificated_user'));
     // locale storage 
     var user = JSON.parse(localStorage.getItem('users')) || [];
     var objet = new Object(); 
         objet.email = email;
         objet.password= password;
         objet.username=username;
         objet.rpassword=rpassword;

     // set  user in users
      var index = user.findIndex(el=> el.email == authentificated_user.email) ;
      user[index] = objet;
      localStorage.setItem('users',JSON.stringify(user));
      var index = user.findIndex(el=> el.email == authentificated_user.password) ;
      user[index] = objet;
      localStorage.setItem('users',JSON.stringify(user));
      var index = user.findIndex(el=> el.email == authentificated_user.username) ;
      user[index] = objet;
      localStorage.setItem('users',JSON.stringify(user));
      var index = user.findIndex(el=> el.email == authentificated_user.rpassword) ;
       user[index] = objet;
       localStorage.setItem('users',JSON.stringify(user));

       // set user in authen
       localStorage.setItem('authentificated_user',JSON.stringify(objet));
       return true;
 }
 
 //   fonction verifier password
 function  verifier_password(password) {
     nbr=0; mins=0; maj=0;
     for (let index = 0; index < password.length; index++) {
         if ( 'a' <= password[index] && password[index] <= 'z' ) {
             mins++;
         }
         else if('A' <= password[index] && password[index] <= 'Z'){
            
             maj++;
         }
         else  if (!isNaN(password[index])){
                 nbr++;
         }    
         else{}    
     }
     if (nbr >0 && mins >0 && maj >0) {
         console.log(password);
         return true;
         
     }
     else{
         // sinon  return  false
         return false;
     }
 
 }


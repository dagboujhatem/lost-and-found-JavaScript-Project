function register (){
    // controle username doit etre >= a 3 
    var username = document.getElementById('username').value;
    if (username.length < 3) {
        alert('veuillez entrez un nom qui contient plusque trois lettres');
        return false;
    }

    else{
        console.log(username);
    }
    // vérifier email 
    // vérifier le mot de passe 
    var password = document.getElementById('password').value;
    if (verifier_password(password)) {
        console.log(password);
    }
    else {
        alert("vauillez entrez un mot mot de passe qui contients des majuscule , des minuscule et chiffre");
    }
    //   fonction verifier password
    function  verifier_password(password)
 {
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
console.log(nbr, maj, mins);
    if (nbr >0 && mins >0 && maj >0) {
        console.log(password);
        return true;
        
    }
    else{
        // sinon  return  false
        return false;
    }

}

// répétez le mots de passe 
var rpassword = document.getElementById('rpassword').value;
if (rpassword == password) {
    console.log(rpassword);
}
else {
    alert('les deux mot de passe ne sont pas identique');
}

// locale storage 
var user = JSON.parse(localStorage.getItem('users')) || [];
var objet = new Object(); 
     objet.email = email;
     objet.password= password;
     objet.username=username;

     user.push(objet);
      localStorage.setItem('user',JSON.stringify(user));


}
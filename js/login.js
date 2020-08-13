function login() {
    // ******récupération des utilisateur apartir de localstorage*****
    var users = JSON.parse(localStorage.getItem('user')) || [];
    console.log(users);

    // ****** des email et mot passe apartir des 2 champs***** 

    //  recupération des emails
    var emails = document.getElementById('emails').value;
    console.log(emails);
    //  recupération des mots de passe
    var pass = document.getElementById('pass').value;
    // console.log(pass);

    // ********filtrage (find ou bien filtre)  des utilisateurs**********

    // on a pris la liste des utilisateurs filtré par l'email saisie dans linpute 
    const found = users.find(user => user.email == emails && user.password == pass);

    if(found == undefined){
    return false;
    }
    else{
        return true;

    }
console.log(found);
}
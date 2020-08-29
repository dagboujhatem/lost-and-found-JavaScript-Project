function login() {
    // ******récupération des utilisateur apartir de localstorage*****
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // ****** des email et mot passe apartir des 2 champs***** 

    //  recupération des emails
    var email = document.getElementById('email').value;
    //  recupération des mots de passe
    var password = document.getElementById('password').value;
    // console.log(pass);

    // ********filtrage (find ou bien filtre)  des utilisateurs**********

    // on a pris la liste des utilisateurs filtré par l'email saisie dans linpute 
    const found = users.find(user => user.email == email && user.password == password);

    if(found == undefined){
        alert('Vérifier votre email ou mot de passe !')
        return false;
    }
    else{
        return true;

    }
}
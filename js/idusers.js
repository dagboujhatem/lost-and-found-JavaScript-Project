function idusers(){

    // get authentificated_user from  localstorage 
    var authentificated_user = JSON.parse(localStorage.getItem('authentificated_user'));
    
    document.getElementById('imagec').innerText = authentificated_user.username;
    document.getElementById('mail').innerText = authentificated_user.email;
    document.getElementById('motpasse').innerText = "*********";

}
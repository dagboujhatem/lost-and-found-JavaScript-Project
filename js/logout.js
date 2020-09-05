function logout(){
    localStorage.removeItem('authentificated_user');
    window.location.href = 'login.html';
}
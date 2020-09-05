function ajoutcard(){
    
    // récupéré les information de l''annonces de locale storage
    // get authentificated_user from  localstorage 
    var annonces = JSON.parse(localStorage.getItem('annonces'));
    var affichage = document.getElementById('affichage');

    //ajouter un nouvea élément card
    for (let i = 0; i < annonces.length; i++) {
        const element = annonces[i];
        console.log(element);
        affichage.innerHTML ="<div class='card' style='width: 18rem;'>"+
           "<img class='card-img-top' src='"+element.images+"' alt='Card image cap'  >"+
            "<div class='card-body'>"+
              "<h5 class='card-title' >"+element.titre+"</h5>"+
              "<p class='card-text' >"+element.descript+"</p>"+
              "<a href='#' class='btn btn-primary'>modifier</a>"+
            "</div>"+
          "</div>";
        
    }
    

}
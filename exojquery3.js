jQuery(function($){
  // CREATION D'ELEMENTS DU DOM
  /**
   *  La troisième façon d'utiliser la fonction
   *  jQuery est de lui donner en paramètre
   *  une chaine de caractère qui correspond à
   *  une balise HTML
   */
  // Création d'un élément p du dom
  let p = $("<p>Paragraphe créé via jQuery</p>");
  // ajout de p en dernier fils de body
  p.appendTo("body");

  for(let i = 0; i < 4; i++){
    $("<p></p>",{
      text: "Texte " + i
    }).appendTo("body");
  }




});
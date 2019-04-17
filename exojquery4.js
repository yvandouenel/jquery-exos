jQuery(function($){
  // Récupération (getter) du html de l'élément #h1
  let titre1 = $("#h1").html();
  console.log(titre1);

  // Setter
  titre1 = $("#h1").html("Nouveau <b>HTML</b>");

  // CSS SETTER
  titre1.css( "color", "red" );

  // CSS GETTER
  let colorH1 = titre1.css("color");
  console.log(colorH1);

  // récupération (get) de l'attribut "id" de h1
  let id = $("#h1").attr("id");
  console.log(id);
  // Modification (set) de l'attribut "id" de h1
  $("#h1").attr("id","autre-identite");

  // Modification (setter) de la position
  $("#autre-identite").offset({ top: 200, left: 300 });

});
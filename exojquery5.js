jQuery(function($){
  console.log("dans exo 5");
  // Parcours de plusieurs éléments du dom grâce à la méthode each
  $("li").each(function(index){
    // le $(this) correspond à chaque élément du dom (ici un li)
    // en fonction du sélecteur utilisé (ici ul > li)
    console.log(index);
    console.log($(this).text());
  });
});
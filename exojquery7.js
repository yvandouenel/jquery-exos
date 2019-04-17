jQuery(function($) {
  // cacher toutes les réponses
  $(".reponse").hide(0);

  /**
   * parcourir toutes les questions et pour
   * chacune d'elle, mettre en place un "manipulateur"
   * d'événement click qui va chercher l'élément suivant
   * (next()) la question et qui a pour class "reponse"
   * pour l'afficher ou le faire disparaitre (toogle)
   */

  $(".question").each(function(index) {
    //création d'un bouton pour chaque question
    let button = $("<button></button", {
      text: "Afficher / Cacher la réponse " + index
    }).appendTo($(this));

    /**
     * ajout d'un gestionnaire d'événement click sur chaque
     * bouton et
     * qui va chercher le prochain élément qui a pour
     * class "reponse" et qui l'affiche ou le cache */

    button.on("click",function(){
      console.log("dans click");
      console.log($(this).text());
      $(this).parent().next(".reponse").toggle(1000);
    });

  });
});

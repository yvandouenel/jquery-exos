jQuery(function($){
  // RÉCUPÉRATION D'ELEMENTS DU DOM
  /**
   *  La deuxième façon d'utiliser la fonction
   *  jQuery est de lui donner en paramètre
   *  une chaine de caractère qui correspond à
   *  un sélecteur CSS
   */
  /** h1 est un objet du dom augmenté par jQuery
   * c'est à dire que l'ojet du dom a des
   * propriétés supplémentaires qui sont
   * souvent des méthodes(comme hide et show).
   * Cet objet est appelé un objet jQuery
  */


  let h1 = jQuery("#h1");
  //cache et affiche h1 en 2 secondes avec chaînage
  //h1.hide(2000).show(2000);

  function Person(prenom) {
    this.prenom = prenom;
    this.age = "32 ans"
    this.sePresenter = function() {
      console.log("Bonjour, je m'appelle " +
      this.prenom)
      return this;
    }
    this.auRevoir = function() {
      console.log("Au revoir")
    }
  }
  let bob = new Person("Bob");
  let age = bob.sePresenter().age;
  console.log(age);


});
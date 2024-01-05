// on selectionne les element et au cliqe il sera mis en display none
var bouton_creer_compte = document.querySelector(".creer-nouveau");
var elemet_a_afficher = document.querySelector(".nouveau_formulaire");
// on selectionne aussi l'element a afficher qui est deja en display none
var bouton_disparaitre = document.querySelector(".bouton_disparaitre");
//le bouton dsiparaitre
var phrase_du_bas = document.querySelector(".phrase_du_bas");
//le phrase du bas
var boite = document.querySelector(".boite");
var pied_de_page  = document.querySelector(".pied-de-page");

// on creer une fonction Action 1 qui sera declencher au clique

//donc lorsque l'on clique le bouton creer compte
function action1() {
  
  if (window.innerWidth <= 720){
    
     phrase_du_bas.style.display = "none";
     boite.style.display = "none";
     pied_de_page.style.display = "none";

    //  on met l'element cache en dispay block
     elemet_a_afficher.style.display = "block";
  }
  else{
 elemet_a_afficher.style.display = "block";}
};

//action 2 se charge de faire disparaitre l'element qui est apparu
function action2(){
 if (window.innerWidth <= 720){
   phrase_du_bas.style.display = "block";
   boite.style.display = "block";
   pied_de_page.style.display = "block";

// on met l'element qui n'est plus cache en dispay:none



   elemet_a_afficher.style.display = "none";
 }
 else{
 elemet_a_afficher.style.display = "none";}

};

 bouton_creer_compte.onclick = action1;
bouton_disparaitre.onclick = action2;

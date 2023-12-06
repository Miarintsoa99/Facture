$(document).ready(function(){ 
   let nomProduit = $("#nomProd");
   let prixUnitaire = $("#prixUnit");
   let nombreProd = $("#nbr");
   let net = 0;
   let tva = 0;
   let somme = 0;  
$("#supprimer").click(function(){
    nomProduit.val("");
    prixUnitaire.val(" ");
    nombreProd.val("") ;
});

$("#tableau").hide();
$("#payemment").hide(); 

$("#ajouter").click( function(){  
    var nomProd, prixUnit, nombre;
     nomProd = nomProduit.val();
     prixUnit = parseFloat(prixUnitaire.val());
     nombre = parseInt(nombreProd.val());
     

     if (nomProd != "" && prixUnit >= 0 && nombre >= 0  ) {  
      if (isNaN(prixUnit) || isNaN(nombre)) {
         alert("Veuillez saisir des entiers pour le prix unitaire et la quantité.");
      }
      else {
        $("#tableau").show(); 
        $("#remplir").append("<tr>" +
         "<td>" + nomProd + "</td>" +
         "<td>" + prixUnit + "</td>" +
         "<td>" + nombre + "</td>" +
         "<td> <button id='remove' class='btn btn-danger btn-sm'><span></span></button> </td>" +
         "</tr>");
        $("#remplir td").addClass("text-uppercase"); 
       $("#remplir").append("</tr>"); 
        
         // button remove 
        $("#remove span").addClass("glyphicon glyphicon-trash"); 

      function netUp() {
      net += prixUnit * nombre;
      }
      function tvaUp() {
      tva += net * 0.2;
      }
       function sommeUp() {
      somme = net + tva;
      } 
  
        $("button#remove").click(function(){
            $("#remove").closest("tr").remove();
            net = 0 ;
            tva = 0 ;
            somme = 0 ;
        });

        $("#valider").click(function(){
              $("#payemment").show(); 
        });

        netUp();
        tvaUp(); 
        // ds
        sommeUp(); 

        $("#net").text(net.toFixed(2) + " AR");
        $("#TVA").text(tva.toFixed(2) + " AR");
        $("#somme").text(somme.toFixed(2) + " AR");
      } 
     } 
     else {
      alert("Veuillez remplir tous les champs.");
    } 
     nomProduit.val("");
     prixUnitaire.val("");
     nombreProd.val("");  

     function netUp() {
      net += prixUnit * nombre;
     }
    function tvaUp() {
      tva += net * 0.2;
     }
    function sommeUp() {
      somme = net + tva;
    }
    $("#Apayer").click(function(){
      let money = $("#money");
      let sommeApayer = money.val();
      let rendre = sommeApayer - somme ;
      if (rendre < 0  )
      {
         alert("La somme est insuffisant ");
         sommeApayer = money.val(" ");
      }
      else if (rendre >= 0 )
      {   
          $("#largent").text(sommeApayer + " AR");
          $("#rendre").text(rendre.toFixed(2)+ " AR") ;
          $("input").prop("disabled", true); 
          $('button').attr('disabled', true);
          sommeApayer = money.val(" ");
      }   
      
    });// fin apayer 
}) ; /* fin bouton ajouter  */ 

}); /* fin jquery */ 
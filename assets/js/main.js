/* es gibt NUR DREI Fähle zu verstehen */

/* 1-kann man Switch mit if zusammen nuten ganz einfach lese langsam und wiederhole die Aufgabe */



/* 2-auch muss einfach langsam lesen und verstehn nicht schwere !!!! */

function zusammen(){
 
  if (document.getElementById("zusammen").checked){
    document.getElementById("zvE2").style.display="block";
  }
  else{
    document.getElementById("zvE2").style.display="none";
  }

}



function rechnen(){
  event.preventDefault();
  const jahre = document.getElementById("jahre").value;
  var zvE1 = document.getElementById("zvE1").value;
  const zvE2 = document.getElementById("zvE2").value;
  const ergebnisse = document.getElementById("ergebnisse");
 


        /* 3- das ist di wichtige code für 2 Person Rechnen */
        if(zvE2!= 0){
          zvE1 = (parseInt(zvE1) + parseInt(zvE2)) / parseInt(2);  
        }
        else{
          zvE1 =document.getElementById("zvE1").value;
        }
        

  const y1 = (zvE1 - 9408)/10000;
  const z1 = (zvE1- 14532)/10000;
  const y2 = (zvE1 - 9168)/10000;
  const z2 = (zvE1- 14254)/10000;
  const y3 = (zvE1 - 9000)/10000;
  const z3 = (zvE1- 13996)/10000;

  switch(jahre) {

    case "2020":
    
      if (zvE1 <= 9408){
        ergebnisse.innerHTML= 0;
      }
      else if(zvE1<= 14532){
        ergebnisse.innerHTML = (972.87 * y1 + 1400) * y1;
      }
     else if(zvE1<=57051){
        ergebnisse.innerHTML = (212.02 * z1 + 2397) * z1 + 972.79;
     }
     else if(zvE1<=270500) {
       ergebnisse.innerHTML = 0.42 * zvE1 - 8963.74;
     }
     else{
       ergebnisse.innerHTML = 0.45 * zvE1 - 17078.74;
     }
     break;

     
    case "2019":
        
      if (zvE1 <= 9168){
        ergebnisse.innerHTML= 0;
      }
      else if(zvE1<= 14254){
        ergebnisse.innerHTML = (980.14 * y2 + 1400) * y2;
      }
     else if(zvE1<=55960){
        ergebnisse.innerHTML = (216.16 * z2 + 2397) * z2 + 965.58;
     }
     else if(zvE1<=265326) {
       ergebnisse.innerHTML = 0.42 * zvE1 - 8780.90;
    
     }
     else{
       ergebnisse.innerHTML = 0.45 * zvE1 - 16740.68;
     }
     break;

    
    case "2018":

      if (zvE1 <= 9000){
        ergebnisse.innerHTML= 0;
      }
      else if(zvE1<= 13996){
        ergebnisse.innerHTML = (997.80 * y3 + 1400) * y3;
      }
     else if(zvE1<=54949){
        ergebnisse.innerHTML = (220.13 * z3 + 2397) * z3 + 948.49;
     }
     else if(zvE1<=260532) {
       ergebnisse.innerHTML = 0.42 * zvE1 - 8621.75;
    
     }
     else{
       ergebnisse.innerHTML = 0.45 * zvE1 - 16437.70;
     }
     break;

  }
  
} 

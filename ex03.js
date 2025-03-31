function signeNombre (nombre){
    if (nombre < 0){
       return "Négatif"
     }
       else if(nombre > 0){
         return "Positif"
       }
     else return "zéro"
     }
 
 
 
 
 console.log(signeNombre(5)); // Positif
 console.log(signeNombre(-3));// Négatif
 console.log(signeNombre(0)); // Zéro
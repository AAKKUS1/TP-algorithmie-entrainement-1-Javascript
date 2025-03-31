function multiplierParDeux(tableau) {
    for(let i =0; i < tableau.length; i++){
      tableau[i] = tableau[i] * 2 ;
    }
    return tableau;
  }
  
  console.log(multiplierParDeux([1, 2, 3])); 
  
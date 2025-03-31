function multiplierParDeux(tableau) {
    const result = []

    for(let i =0; i < tableau.length; i++){
      result.push(tableau[i] * 2);
    }
    return result;


    return tableau.map((nombre) => nombre * 2)
  }
  
  console.log(multiplierParDeux([1, 2, 3])); 
  
function afficherInfosPersonne (infos){
    return infos.nom + " a " + infos.age + " ans et habite à " + infos.ville + '.'
  }
  
  console.log(afficherInfosPersonne({ nom: "Alice", age: 30, ville: "Paris" })); 
  // 'Alice a 30 ans et habite à Paris.'
  
function motDePasseValide (mdp) {
    return mdp.length >= 8 ;
  }
  
  
  console.log(motDePasseValide('12345678')); // Affiche : true
  console.log(motDePasseValide('abcd')); // Affiche : false
  console.log(motDePasseValide('MotDePasseLong')); // Affiche : true
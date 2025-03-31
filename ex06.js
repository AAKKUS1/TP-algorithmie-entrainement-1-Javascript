function compterConsones(texte) {

    texte = texte.toLowerCase();
    
    let counter = 0;
    
    const consonnes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    
    for (let i = 0; i < texte.length; i++) {
        if (consonnes.includes(texte[i])) {
            counter++;
        }
    }
    
    return counter;
}

console.log(compterConsones('Bonjour')); // Affiche : 4
console.log(compterConsones('JavaScript')); // Affiche : 7
console.log(compterConsones('Hello World')); // Affiche : 7
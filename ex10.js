function listerPersonnes (personnes) {
    let result = '';
   for (let i = 0; i < personnes.length; i++) {
     result += personnes[i].name + ' : ' + personnes[i].age + ' ans, ';
   }
   return result;
 }
 
 const personnes = [
   { name: "Alice", age: 30 },
   { name: "Bob", age: 25 },
   { name: "Charlie", age: 35 }
 ];
 
 console.log(listerPersonnes(personnes)); // 'Alice : 30 ans, Bob : 25 ans, Charlie : 35 ans.'
 
// ou alors


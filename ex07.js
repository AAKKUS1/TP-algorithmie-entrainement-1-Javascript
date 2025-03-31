function filtrerValeursFalsy(tableau) {
    return tableau.filter(Boolean);
}

console.log(filtrerValeursFalsy([0, "hello", "", null, undefined, 42, NaN])); 

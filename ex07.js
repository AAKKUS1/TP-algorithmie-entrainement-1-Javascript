function filtrerValeursFalsy(tableau) {
    return tableau.filter((elem) => elem == null || elem == undefined || elem == "");
}

console.log(filtrerValeursFalsy([0, "hello", "", null, undefined, 42, NaN])); 
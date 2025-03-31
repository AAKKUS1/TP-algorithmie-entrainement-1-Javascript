function max(a, b) {
    if (a < b){
      return b
    }
      else if(a > b){
        return a
      }
    else return "les deux nombres sont égaux"
    }
  
  
  
  console.log(max(3, 7));// 7
  console.log(max(10, 10));// 10
  console.log(max(-5, 2)); // 2
function suma(a, b, callback) {
    let c = a + b;
    callback(c);
  }
  
  function resultado(result) {
    console.log("La suma es: " + result);
  }
  
  suma(2, 3, resultado);
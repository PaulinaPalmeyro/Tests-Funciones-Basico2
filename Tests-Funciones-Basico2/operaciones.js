const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => {
      if (b === 0) {
        throw new Error('No se puede dividir por cero');
      }
      return a / b;
    }
  };
  
  module.exports = operaciones;
  
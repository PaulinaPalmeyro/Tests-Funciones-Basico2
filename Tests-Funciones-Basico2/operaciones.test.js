const operaciones = require('./operaciones');

test('suma correctamente dos números', () => {
  expect(operaciones.suma(1, 2)).toBe(3);
});

test('resta correctamente dos números', () => {
  expect(operaciones.resta(5, 2)).toBe(3);
});

test('multiplica correctamente dos números', () => {
  expect(operaciones.multiplicacion(2, 3)).toBe(6);
});

test('divide correctamente dos números', () => {
  expect(operaciones.division(6, 3)).toBe(2);
});

test('da un error al dividir por cero', () => {
  expect(() => {
    operaciones.division(6, 0);
  }).toThrow('No se puede dividir por cero');
});

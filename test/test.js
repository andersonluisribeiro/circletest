const Calculadora = require("../models/Calculadora");
const assert = require('assert');

describe('Calculadora', function() {
  describe('#somar', function() {
    it('deve somar', function() {
      const calculadora = new Calculadora();
      const resultado = calculadora.soma(2,3);
      assert.equal(resultado, 5);
    });
  });
});

let calculator = {

  sum(a, b){
    return this.a + this.b;
  },

  mul(a, b){
    return this.a * this.b;
  },

  read(a, b){
    this.a = a;
    this.b = b;
    
  },

};

// calculator.read(3, 5)
// console.log(calculator.sum())
// console.log(calculator.mul())

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

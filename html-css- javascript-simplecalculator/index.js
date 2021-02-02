  function displaynum(num){
    calculator.answer.value += num;
  } 
  function clr(){
    calculator.answer.value = '';
  }
  function eql(){
    calculator.answer.value = eval(calculator.answer.value);
  }
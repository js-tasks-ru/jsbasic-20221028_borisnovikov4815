/**
 * Эту функцию трогать не нужно
 */
 function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  //name не пустой, без пробелов, >+4char
  
if(name != null){
  if(name != ""){
    if(name.includes(" ") == false){
      if(name.length > 3){
        if(name != "Oleg" && name != "oleg"){
   return true
        }
      }
    }
  }
}
return false
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

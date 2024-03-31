/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name && !name.includes(' ') && name.length > 3) {
    return true
  }
  return false;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

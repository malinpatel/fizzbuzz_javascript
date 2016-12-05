function is_divisible_by_3(number){
  if (number % 3 === 0) {
    return 'Fizz';
  }
  else {
    return number;
  }
}

function is_divisible_by_5(number){
  if (number % 5 === 0) {
    return 'Buzz';
  }
  else {
    return number;
  }
}

function is_divisible_by_15(number){
  if (number % 15 === 0) {
    return 'FizzBuzz';
  }
  else {
    return number;
  }
}

function is_divisible_by_number(number,divisor){
  if (number % divisor === 0) {
    return true;
  }
  else {
    return false;
  }
}

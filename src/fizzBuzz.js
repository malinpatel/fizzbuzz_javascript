
isDivisibleBy = function(number,divisor) {
  return (number % divisor === 0);
};

isDivisibleBy3 = function(number) {
  return (isDivisibleBy(number,3));
};

isDivisibleBy5 = function(number) {
  return (isDivisibleBy(number,5));
};

isDivisibleBy15 = function(number) {
  return (isDivisibleBy(number,15));
};

fizzbuzz = function(number) {
if (isDivisibleBy15(number)){
  return ('FizzBuzz');
}
else if (isDivisibleBy3(number)){
  return ('Fizz');
}else if (isDivisibleBy5(number)){
  return ('Buzz');
}else {
  return number;
}
};

describe('fizzBuzz', function() {


  it('should return true if divisible by 3', function() {
    expect(isDivisibleBy3(3)).toEqual(true);
  });

  it('should return false if not divisible by 3', function() {
    expect(isDivisibleBy3(4)).toEqual(false);
  });

  it('should return true if divisible by 5', function() {
    expect(isDivisibleBy5(5)).toEqual(true);
  });

  it('should return false if not divisible by 5', function() {
    expect(isDivisibleBy5(6)).toEqual(false);
  });

  it('should return true if divisible by 3 and 5', function() {
    expect(isDivisibleBy15(15)).toEqual(true);
  });

    it('should return false if not divisible by 3 and 5', function() {
      expect(isDivisibleBy15(16)).toEqual(false);
    });

    it('tests for arbitrary divisibility', function() {
      expect(isDivisibleBy(3,3)).toEqual(true);
    });

    it('tests for arbitrary indivisibility', function() {
      expect(isDivisibleBy(3,4)).toEqual(false);
    });

    it('returns fizz when number is divisible by 3', function() {
      expect(fizzbuzz(3)).toEqual('Fizz');
    });

    it('returns buzz when number is divisible by 5', function() {
      expect(fizzbuzz(5)).toEqual('Buzz');
    });

    it('returns fizzbuzz when number is divisible by 15', function() {
      expect(fizzbuzz(15)).toEqual('FizzBuzz');
    });

});

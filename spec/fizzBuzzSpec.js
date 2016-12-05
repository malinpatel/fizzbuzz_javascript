describe("FizzBuzz", function(){

  it("is divisible by three", function(){
    expect(is_divisible_by_3(3)).toEqual('Fizz');
  });

  it("is not divisible by three", function(){
    expect(is_divisible_by_3(4)).toEqual(4);
  });

  it("is divisible by five", function(){
    expect(is_divisible_by_5(5)).toEqual('Buzz');
  });

  it("is not divisible by five", function(){
    expect(is_divisible_by_5(6)).toEqual(6);
  });

  it("is divisible by three and five", function(){
    expect(is_divisible_by_15(15)).toEqual('FizzBuzz');
  });

  it("is not divisible by three and five", function(){
    expect(is_divisible_by_15(16)).toEqual(16);
  });

  it("should test for arbitrary divisibility", function(){
    expect(is_divisible_by_number(3,3)).toEqual(true);
  });


});

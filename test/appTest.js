const assert = require('chai').assert;
const app = require('../app');

// Results
sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5,5)
palindromeResult1 = app.palindrome('dad')
palindromeResult2 = app.palindrome('mum')
palindromeResult3 = app.palindrome('tree')

describe('App', function(){
  describe('sayHello()', function(){
    it('app should return hello', function(){
      assert.equal(sayHelloResult, 'hello');
    });
  
    it('sayHello should return type string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function(){
      assert.isAbove(addNumbersResult, 5);
    });
  
    it('addNumbers should return type number', function() {
      assert.typeOf(addNumbersResult, 'Number');
    });
  });

  describe('palindrome', function(){
    it('should return a true', function(){
      assert.equal(palindromeResult1, true)
    });

    it('should return a true', function(){
      assert.equal(palindromeResult2, true)
    });

    it('should return a false', function(){
      assert.equal(palindromeResult3, false)
    });

  })

});
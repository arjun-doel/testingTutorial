module.exports = {
  sayHello: function() {
    return 'hello';
  },
  addNumbers: function(value1, value2) {
    return value1 + value2
  },
  palindrome: function(string){
    const array = string.split('')
    const reverse = array.reverse()
    return reverse.join('') === string
  }
}

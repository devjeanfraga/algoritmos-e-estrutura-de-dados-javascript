/*
  Palindromo é quando uma palavra invertida que tem
  o mesmo som dela na ordem correta
*/

function isPalindrome (string) {
  if (string.length === 1) return true
  if (string.length === 2 ) return string[0] === string[1];
  if (string[0] === string.slice(1)) return isPalindrome(string.slice(1, -1))
  return false;
}

 isPalindrome('awesome') // false
 isPalindrome('foobar') // false
 isPalindrome('tacocat') // true
 isPalindrome('amanaplanacanalpanama') // true
 isPalindrome('amanaplanacanalpandemonium') // false

 
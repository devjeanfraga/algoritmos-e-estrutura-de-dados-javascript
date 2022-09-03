/*
  Reverse Solution
*/

function reverse (string) {
  if (string.length === 0 ) return string
  return reverse(string.slice(1)) + string[0]
}

reverse("roma")

// amor
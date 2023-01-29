#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int P, R; 
  cin >> P >> R; 
  if (P && R) cout << 'A'; 
  else if (P && !R) cout << 'B';
  else cout << 'C';
  return 0;
}

/*
  input int P R 
  output char
  1 && 1 = A
  1 && 0 = B
  0 && 0 = C 
*/

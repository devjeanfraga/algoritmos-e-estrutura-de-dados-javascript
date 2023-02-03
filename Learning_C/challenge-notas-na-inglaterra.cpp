#include <iostream>
using namespace std;


int main() {
  // Escreva seu código aqui
  int n;
  char result;
  
  cin >> n;
  
  if( n <= 0 ) result = 'E';
  else if( n > 0 && n <= 35 ) result = 'D';
  else if( n > 35 && n <= 60 ) result = 'C';
  else if( n > 60 && n <= 85 ) result = 'B';
  else result = 'A';
  
  cout << result <<  endl; 
  return 0;
};

/*
input int 
output char
0      E
1-35   D
36-60  C
61-85  B
86-100 C
*/

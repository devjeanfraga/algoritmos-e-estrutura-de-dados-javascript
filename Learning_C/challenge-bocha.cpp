#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int a, b, c, res; 
  cin >> a >> b >> c; 
  
  if (a > b && a > c ) b > c ? res = b : res = c; 
  if (b > a && b > c ) a > c ? res = a : res = c;
  if (c > a && c > b ) a > b ? res = a : res = b;	
  cout << res << endl;		
  return 0;
}; 

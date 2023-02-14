#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  unsigned long int n, result = 0; // 0 a (2.147.483.648 + 2.147.483.647) = 4.294.967.295  | signed = -2.147.483.648 a 2.147.483.647  4bytes 
  string blockList;
  cin >> n >> blockList;
   
  for (int j = 0; j < n; j++) {
  	char block = blockList[j];
  	
	if (block == 'P' || block == 'C') result += 2;
	if (block == 'A') result += 1;
	
  };
  cout << result; 
  return 0;
}; 
/*
  entrada first line:
  int = 32.768-32.767;  
  signed int = -32.768 - 32.767; 
  unsigned int = 32.768 + 32.767 = 65.535;
  long int 0 <= N <= 10^6 === 1.000.000;
     
  P - linha reta sem curvas ou saidas -  1 esquerdo - 1 lado  direito = 2;
  C - Curva = 2; 
  A - Acesso = 1;
  D - Duplo acesso = 0;  
*/

#include <iostream>
using namespace std;

int main() {
  // Escreva seu c�digo aqui
  int n, middle, result, sum = 0, total = 0;
  cin >> n;
  int sections[n];
  
  for (int j = 0; j < n; j++) {
  	cin >> sections[j];
  	total += sections[j];
  };
  
  middle = total / 2; 
  for (int k = n-1; k >= 0; k--) {
  	if(sections[k] == middle) {
  		result = k;
		break; 
	  };
  };
  
  for (int k = n-1; k >= 0; k--) {
  	if(sum + sections[k] < middle) sum += sections[k];
  	else if ((sum + sections[k])== middle) {
  		result = k;
  		break;
	} else sum = 0; 
  }; 
  
  cout << result;
  return 0;
}
/* 
*** encontrar o K ***
somar as se��es;
dividir por 2; 

verificar se o 
*/

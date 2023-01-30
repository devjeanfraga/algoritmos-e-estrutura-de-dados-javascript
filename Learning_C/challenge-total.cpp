#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int qty, total = 0, sum; 
  cin >> qty; 
  int people[qty];
  
  for (int i = 0; i < qty; i++) {
	cin >> people[i]; 
  }; 
  
  for (int i = 0; i < qty; i++) {
	total += people[i]; 
  };
  
  cin >> sum; 
  cout << (sum == total ? "Acertou" : "Errou") << endl;
  return 0;
}
 /*
  input int qtyPeople;
  input int Ci
  input total 

  output string "Acertou" : "Errou"; 
 */

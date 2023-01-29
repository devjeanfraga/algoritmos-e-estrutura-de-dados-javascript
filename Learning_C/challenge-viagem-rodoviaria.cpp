#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int L, D, K, P;
  
  cin >> L >> D;
  cin >> K >> P; 
  
  cout << ((L*K) + (L/D) * P) << endl; 
  return 0;
}
/*
  INPUT 
  INT 
  L comprimento da estrada 
  D distancia entre pedágios 

  K custo por km 
  P valor do pedágio 
*/

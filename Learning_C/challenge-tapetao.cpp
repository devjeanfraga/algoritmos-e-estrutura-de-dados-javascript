#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui;
  int m, qtyCarpets, result;
  cin >> m >> qtyCarpets;
  qtyCarpets = qtyCarpets - 1;
  result = m - qtyCarpets;
  result = result * result + qtyCarpets;
  cout << result; 
  return 0;
}; 

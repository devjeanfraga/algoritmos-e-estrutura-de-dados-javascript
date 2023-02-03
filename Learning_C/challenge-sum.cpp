#include <iostream>
using namespace std;


int main() {
  // Escreva seu código aqui
  int n, result;
  cin >> n;
  int numbers[n];
  for (int j = 0; j < n; j++) {
  	cin >> numbers[j]; 	
  };
  
  for (int i = 0; i < n; i++) {
  	result += numbers[i]; 
  }; 
  
  cout << result <<  endl; 
  return 0;
};

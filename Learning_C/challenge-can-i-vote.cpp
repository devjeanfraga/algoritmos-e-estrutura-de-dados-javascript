#include <iostream>
#include <string>
#include<locale.h>
using namespace std;


int main() {
  // Escreva seu c�digo aqui
  setlocale(LC_ALL, "Portuguese");
  
  int N;
  cin >> N; 
  string answers[3] = { "pode votar e ser presa", "n�o pode votar nem ser presa", "pode votar"}; 
  
  N = N >= 18 ? 0 : N < 16 ? 1 : 2;   		
  cout << answers[N]<< endl; 
  return 0;
}

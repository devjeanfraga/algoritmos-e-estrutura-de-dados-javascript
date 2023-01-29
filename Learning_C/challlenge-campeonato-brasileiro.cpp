#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int Cv, Ce, Cs, Fv, Fe, Fs; 
  const int win = 3;
  //aTie = 1; 
  cin >> Cv >> Ce >> Cs >> Fv >> Fe >> Fs;
  
  int cormengo = win * Cv + Ce + Cs;
  int flaminthians = win * Fv + Fe + Fs;
  
  if (cormengo > flaminthians ) cout << "C";
  else if (cormengo == flaminthians) cout << "=";
  else cout << "F";
  
  return 0;
}
/*
vitoria = 3
empate= 1
empate ? winner = +gols
input int Cv Ce Cs Fv Fe Fs; 
campeonato-brasileiro

win* Cv
win* Fv



*/

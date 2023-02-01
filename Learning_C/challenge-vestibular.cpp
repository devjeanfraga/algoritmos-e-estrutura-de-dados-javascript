#include <iostream>
#include <string>
using namespace std;

int main() {
  // Escreva seu código aqui;
  int qtyQuestions; 
  string answers, userAnswers;
  
  // Inputs 
  cin >> qtyQuestions;
  cin >> answers;
  cin >> userAnswers; 
  
  int j = 0, qtyHits = 0;
  while (j < qtyQuestions) {
  	// compare answers; 
   	if(userAnswers[j] == answers[j]) qtyHits += 1;
	j += 1;  
  };
  
  // return the right answers; 
  cout << qtyHits; 
  return 0;
}
/*
objetivo: 
  escrever um programa que determina o numero de acertos do candidato; 
input 
  int numero de questoes da prova. 
  char list indicando o gabarido da prova OBS em uppercase A B C ... 

output
  int numero de acertos do candidato; 
  var names: int qtyQuestions, qtyHits;
 
*/

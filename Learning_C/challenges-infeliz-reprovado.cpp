#include <iostream>
#include <string>
#include <iomanip>
using namespace std;


int main() {
  // Escreva seu c�digo aqui
  int students;
  
  cin >> students;
  string exams[students]; 
   
  for (int i = 0; i <= students; i++) {
	getline(cin, exams[i]); 
  };  
 cout << students; 	
  return 0;
};


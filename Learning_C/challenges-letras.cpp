#include <iostream>
#include <string>
#include <iomanip>
using namespace std;
string slice ( string arr, int start, int end);
bool isLetter (char pattern, string text); 

int main() {
  // Escreva seu código aqui
  /*
  	Objetivo retornar o percentual da letra inputada numa cadeia de caracteres; 
  */
  
  string text;  
  int qtyLetter = 0, qtyWords = 0;
  float result;
  
  string strLetter;
  
  getline(cin, strLetter); 
  getline(cin, text); 
  
  int i = 0, left = 0;
  char letter = strLetter[0];
  
  /*
  	acumular a quantidade de palavras e a quantidade de padroes encontrados;
  */
  while (i <= text.length()) {
	if(text[i] == ' ' || text[i] == '\0') {
		string word = slice(text, left, i);
		bool pattern = isLetter( letter, word ); 
		if (pattern) qtyLetter += 1; 
		qtyWords += 1;
		left = i+1;	
	};
	i += 1; 
  };
  
  /*
  	calcular o percentual do padrão no texto;
  */
  result = (float) (qtyLetter*100)/qtyWords;
  cout << fixed << setprecision(1) << result << endl; 
  return 0;
};

string slice ( string str, int start, int end ) {
	string result;
	if(!end) end = str.length(); 
	for (int i = start; i < end; i++) {
		result += str[i]; 
	};
	return result; 
};

bool isLetter (char pattern, string text) {
	bool result = false;
	int i = 0; 
	while (i < text.length()) {
		if (pattern == text[i]) {
			result = true;
			break;
		};
	    i += 1; 
	};
  return result; 
};

#include <iostream>
#include <string>
#include <locale.h>


using namespace std;

int main () {
	setlocale(LC_ALL, "Portuguese");
	
	int n; 
	cin >> n;
	//string answer = n % 7 == 0 ? "� MULTIPLO DE 7" : "ESSE N�O �"; 
	cout  << (n % 7 == 0 ? "� MULTIPLO DE 7" : "ESSE N�O �") << endl; 
	return 0; 
};

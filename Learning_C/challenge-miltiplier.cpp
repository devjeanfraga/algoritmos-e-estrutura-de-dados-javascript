#include <iostream>
#include <string>
#include <locale.h>


using namespace std;

int main () {
	setlocale(LC_ALL, "Portuguese");
	
	int n; 
	cin >> n;
	//string answer = n % 7 == 0 ? "É MULTIPLO DE 7" : "ESSE NÃO É"; 
	cout  << (n % 7 == 0 ? "É MULTIPLO DE 7" : "ESSE NÃO É") << endl; 
	return 0; 
};

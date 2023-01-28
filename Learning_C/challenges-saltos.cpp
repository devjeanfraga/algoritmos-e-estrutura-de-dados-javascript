#include <iostream>

using namespace std;

int main () {
	int distancia, salto, acumulador = 0, counter = 0;
	cin >> distancia >> salto;
	
	while (acumulador < distancia ) {
		acumulador += salto;
		counter += 1;
	}
	cout << counter << endl; 
	return 0; 
};

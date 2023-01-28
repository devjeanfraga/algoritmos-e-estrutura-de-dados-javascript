#include <iostream>
#include <string>
#include <locale.h>


using namespace std;

int main () {
	setlocale(LC_ALL, "Portuguese");
	
	int n, winner;
	bool isWinner; 
	cin >> n;
	int assentos[n];
	
	for (int i = 0; i < n; i ++) cin >> assentos[i];
	
	cin >> winner;
	
	for (int j = 0; j < n; j++) {
		if(assentos[j] == winner) {
			cout << "Número da poltrona do vencedor: " << j << endl;
			isWinner = true;
			break;
		};
	}; 
	
	if(!isWinner) cout << "Não há vencedor" << endl;
};

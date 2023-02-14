#include <iostream>
#include <string>
#include <iomanip>
using namespace std;


int main() {
  // Escreva seu código aqui
  string text;
  cin >> text; 
  
  /* Denifir o padrão que constroi a string */
  	int size = text.length();

	/* Definir o padrão dentro da string pegando a quantidade de elementos diferentes */
  	int i = 0, j = 1; 
  	int restart = 0; 
  	
	while (j < size) {	
		while (text[i] != text[j] && j < size) {
			restart += 1;
			j++;	
		}; 
		j += 1;
		i += 1;
	}; 
	
	bool isDiff;
	restart += 1; 
	
	if (
		size != restart && 
		(size-restart / restart != 0 || 
		size-restart / restart != 1 )
	){
	
		isDiff = (size-restart) % restart != 0;		
	} else isDiff = true; 
	
	
	cout << ( isDiff ? "INVALIDO" : "VALIDO") << endl; 
		 
    return 0;
};

/* 
	*** RASCUNHO 1***
	
	for (int i = 0; i < size; i++) {
		cout << table[i] << ' '; 
	}
	bool isDiff = false;
	restart = size <= 3 ? restart : restart+1;
	if (restart != size) {
		i = 0, j = restart; 
		while ( j < size ) {
			
			if ( text[i] != text[j] ) {
				isDiff = true; 
				break;   	
			}; 
			i += 1;
			j += 1;
		};
    } else isDiff = true; 
	
	cout << << endl;
	
	*** RASCUNHO 2 ***
		i = 0, j = 1; 
	if ( size < 3 ){
		cout << "size < 3";
		while ( j < size ) {
			if ( text[i] != text[j]) {
				isDiff = true;
				break; 
			};			
			i += 1;
			j += 1;
		};
	} else 
	
	cout << size << " " << restart << endl;	

*/	




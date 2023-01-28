#include <iostream>

using namespace std;

int main(){
	
	int number[5]={10,20,30,40,50};
	int i;
	
	

	for(i=0; i < sizeof(number)/4; i++){
		
		cout << number[i] << "\n";
	}
	
	cout << sizeof(int); 
	
	return 0;
	
}

	/*sizeof() indica o tamanho da tipagem em bytes;	
		 Ou seja, ao usar essa fun��o no array(number),
		 ela vai retornar 20, pois cada tipagem do "int"
		 tem 4bytes, logo 4x5 items � igual a 20. 

		Outra coisa a ser feita � dividir o tamanho retornado 
		pela fun�ao pelo numero de bytes que cada tipagem tem,
		nesse caso sao 4 logo ficaria "sizeof(vetor)/4";
		
		for(i=0; i < sizeof(number)/4; i++){
		cout << number[i] << "\n"; 
		}
	
	*/


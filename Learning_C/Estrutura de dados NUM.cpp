#include <iostream>
using namespace std;

int main(){
	//Estrutura de dados
	//NUM associaçao de elementos a numeros.
	
	enum armas{mp5=100, doubleVector, thompson, alpe};
	armas armaSel; 
	// seria algo semelhante a isso: int numbers; 
	
	armaSel= doubleVector;
	
	cout << armaSel << "\n";
	return 0;
}

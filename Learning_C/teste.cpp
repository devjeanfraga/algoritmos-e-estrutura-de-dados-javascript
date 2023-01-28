#include <iostream>
using namespace std;

template<class genTipo, int tamanho=50>
class genClasse{
	genTipo estocagem[tamanho];
	
	
};

template<class genTipo>
	void troca(genTipo& el1, genTipo& el2){
		genTipo tmp= el1; el1=el2; el2=tmp; 
	}
	
 int main(){
 	
 	genClasse<int> objeto1;
 	genClasse<int, 150> objeto2;
 	genClasse<double,240> objeto3;
 	
	return 0;
	
 }

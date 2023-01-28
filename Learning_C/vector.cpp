#include <iostream>
#include <vector>

using namespace std;



int main(){
	
	vector<int> num, num2; 
	int tam, tam2;
	
	num.push_back(10);
	num.push_back(20);
	num.push_back(30);
	num.push_back(40);
	num.push_back(50);
	
	num2.push_back(100);
	num2.push_back(200);
	num2.push_back(300);
	num2.push_back(400);
	num2.push_back(500);
	
	
	cout<<"Vector 1:\n";
	tam=num.size();
	for(int i=0; i<tam; i++){
		cout<< num[i]<< "\n";
	}
	cout << "\n\n";

	
	cout<<"Vector 2:\n";
	tam2=num2.size();
	for(int i=0; i<tam2; i++){
		cout<< num2[i] << "\n";
	}
	
	//trocar os valores de dois vectores
	num.swap(num2); 
	
	cout<<"\n\nVector 1:\n";
	tam=num.size();
	for(int i=0; i<tam; i++){
		cout<< num[i]<< "\n";
	}
	cout << "\n\n";

	
	cout<<"Vector 2:\n";
	tam2=num2.size();
	for(int i=0; i<tam2; i++){
		cout<< num2[i] << "\n";
	}
	
	
	//inserir um valor no inicio ou no final do vetor 
	num.insert(num.begin(),150); 
	num.insert(num.end(), 250);
	num.insert(num.begin()+2, 350);
	num.insert(num.end()-3,950);
	
	cout<<"\n\nVector 1:\n";
	tam=num.size();
	for(int i=0; i<tam; i++){
		cout<< num[i]<< "\n";
	}
	cout << "\n\n";
	
	//Remover Valores
	num.erase(num.begin()+3); //lembrando que o erase RETIRA O QUE ESTÁ NA QUARTA POSIÇAO; 
	num.erase(num.end()-1);// tira o que estiver DE FATO NA ULTIMA POSIÇÃO, se quisesse tirar o da penulta seria: num.end()-2;  
	
		cout<<"\n\nVector 1:\n";
	tam=num.size();
	for(int i=0; i<tam; i++){
		cout<< num[i]<< "\n";
	}
	cout << "\n\n";
	
	
	cout <<"\n\nnumero do meio por meio do at()"<<  num.at(tam/2)<< "\n\n";


	for(int i=0; i< tam; i++){
		cout<< "ultimo elemento: "<< num.back() << "\n";
		num.pop_back();
		cout << "Tamanho da lista: "<< num.size() << "\n"; 
	}
	
	
	return 0;
	
}



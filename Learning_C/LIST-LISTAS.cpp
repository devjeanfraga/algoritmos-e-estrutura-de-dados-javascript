#include <iostream>
#include <list>

using namespace std;

int fatoracao(int n);

int main(){
	int index;
	list <int> numbers, teste;
	list<int>::iterator it;  //declaraçao de list seguido do tipo <int> seguido do 'op de resoluçao de escopo', iterator e referencia;
	
	 for(index = 0; index<10 ; index++){ 
		teste.push_front(fatoracao(index));
		
		cout <<"Resultado da fatoracao: " <<teste.front() << "\n\n";
	}
	cout << "\ntamanho da lista teste: "<< teste.size()<< "\n"; 
	
	
	/****Adicionando elementos na list "numbers" por meio do for(){};****/
	int tam;
	tam=10;
	for(int i=0; i<tam; i++){
		numbers.push_back(i); //numbers.push_back();
	}
	
	/****Adicionando elementos na list "numbers" usando iterator;****/
	it=numbers.begin();    //numbers.end();
	advance(it,21);         //advance(itarator e a posição=distance);
	numbers.insert(it,35); //insert(iterator, o elemento a ser inserido);
	//numbers.reverse();	   // reverte a ordem;	
	numbers.merge(teste);
	numbers.erase(--it);
	numbers.sort(); 	   // ordenação; 
	//numbers.clear(); serve para limpar toda a list
	cout << "\nTamanho da list numbers: " <<numbers.size()<< "\n\n";
	
	tam=numbers.size();
	for(int i=0; i<tam;i++){
		cout << numbers.front() << "\n"; //imprime o elemento que está na frente; 
		numbers.pop_front();			 //retira o elemento da frente;
	}
	return 0;
}

int fatoracao(int n){
	if(n==0){
		return 1;
	}else{
		return n*fatoracao(n-1);
	}
}

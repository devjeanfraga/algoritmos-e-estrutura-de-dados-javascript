#include <iostream>
#include <string>

using namespace std;

//Sempre declare as functions após o main; 
//MAS sempre as apresente(prototipe-as) ANTES  do main;

void text();
void soma(int n1, int n2);
int soma2(int n1, int n2);
void trans(string tr[4]);

int main(){
	int res; 
	
	string transporte[4]={"carro", "aviao", "trem", "moto"};	
	soma(20,35);
	res= soma2(50,35); 
	
	cout << "\n\n\O retorno da function soma2 e igual a:\n" << res << "\n\n"; 
	trans(transporte);
	
	
	//for(int i=0; i< 15; i++){ text();}
	return 0;
}


void text(){
	cout << "\nJean Oliveira Fraga\n";
}


void soma(int n1, int n2){
	cout << "\n\nA soma dos valores informados e igual a: " << n1+n2 << "\n\n"; 	
}


int soma2(int n1, int n2){
	return n1+n2;
}

void trans( string tr[4]){
	
	for(int i=0; i<4; i++){
		cout << tr[i] << "\n";  
	}
	
}

#include <iostream>
#include "pooHeader3.h"

using namespace std;

int main(){
	
	Veiculo *v1=new Veiculo(1);
	Veiculo *v2=new Veiculo(2);
	Veiculo *v3=new Veiculo(3);
	
	v1->setLigado(1);
	v2->setLigado(1);
	v3->setLigado(0);
	
	cout << v1->getVelMax() <<"\n" ;
	cout << v2->getVelMax() <<"\n" ;
	cout << v3->getVelMax() <<"\n" ; 
	
	if(v1->getLigado()){
		cout <<  "\nsim o veiculo esta ligado" << endl;
	}else{
		cout << "\nO veiculo está desligado" << endl;
	}
	
	if(v2->getLigado()){
		cout <<  "\nsim o veiculo esta ligado" << endl;
	}else{
		cout << "\nO veiculo está desligado" << endl;
	}
	
	if(v3->getLigado()){
		cout <<  "\nsim o veiculo esta ligado" << endl;
	}else{
		cout << "\nO veiculo esta desligado" << endl;
	}
	return 0;
}

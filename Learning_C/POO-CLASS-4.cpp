#include <iostream>
#include "pooHeader4.h"

using namespace std;

int main(){
	
	Moto   *v1= new Moto();
	Carro  *v2= new Carro();
	Tanque *v3= new Tanque();
	
	
	v1->show();
	v2->show();
	v3->show();
	
	
	//Herança multipla; 
	Avatar *object=new Avatar();
	object->fire();
	object->water();
	object->earth();
	object->air();
	
	
	return 0;
}

#include <iostream>
using namespace std;

 //constantes
 #define pi 3.1415
 #define aula cout << pi << " E UMA CONSTANTE"; 

int main(){
	
	//AULA 1
    //tipo nome;
	//tipo nome = valor;
	int vds= 3; //recebe numeros inteiros;
	char letra='J'; //recebe um caracter;
	double nDecimais= 2.599999;  //recebe numeros como 2,599999;
	float nDecimal2= 2.6; // tem uma precisao menor que a double 2,6;
	bool vivoOuNao= true; //valoreas bolianos 0 falso 1 verdadeiro;
	string name= "";  //recebe uma cadeia de caracteres; 
	
	cout << vds << "\n";
	cout << letra << "\n";
	cout << nDecimais << "\n";
	cout << nDecimal2 << "\n";
	cout << vivoOuNao << "\n";
	cout << name << "\n";
	cout << "Digite seu nome: ";
	cin >> name;
	
	//AULA 2 
	int vidas=3, lifes=200,tiros=500;
	
	cout << pi << "\n\n";
	aula;
	
	
	return 0;
}





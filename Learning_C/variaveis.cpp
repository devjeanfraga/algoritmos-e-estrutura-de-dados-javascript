#include <iostream>

using namespace std;

int main(){
//tipo nome;
//tipo nome = valor;
	int vidas= 3; //recebe numeros inteiros;
	char letra='J'; //recebe um caracter;
	double nDecimais= 2.599999;  //recebe numeros como 2,599999;
	float nDecimal2= 2.6; // tem uma precisao menor que a double 2,6;
	bool vivoOuNao= true; //valoreas bolianos 0 falso 1 verdadeiro;
	string name= "";  //recebe uma cadeia de caracteres; 
	
	cout << vidas << "\n";
	cout << letra << "\n";
	cout << nDecimais << "\n";
	cout << nDecimal2 << "\n";
	cout << vivoOuNao << "\n";
	cout << name << "\n";
	cout << "Digite seu nome: ";
	cin >> name;
	return 0;
	
}

#include <iostream>
#include <string>
#include <stdlib.h>

using namespace std;

int main(){
	
	char value;
	int number;
	
	
	start: 
	system("cls");	
		
	cout << "Para falar com o financeiro digite 1\n";
	cout << "Para falar com o suporte tecinico digite 2\n";
	cout << "Para falar com um atendente digite 3\n\n";
	cout << "Para falar com a ouvidoria digite 4\n\n";
	
	cin >> number;
	
	switch(number){
		
		case 1:
			cout << "Financeiro \n";
			break;
		case 2:
			cout << "Suporte tecnico \n";
			break;
		case 3:
			cout << "Atendente \n";
			break;
		case 4:
		case 5:
		case 6:
			cout << "Ouvidoria\n";
			switch(number){
				case 4:
					cout << "atendente Dorian\n";
					break;
			}
			break;
		case 7:
		case 8:
		case 9:
			cout << "Orgao regulador\n";	 
		default:
			cout << "desculpe, essa opcao nao esta disponivel\n";
	}
	
	cout << "\nDeseja retornar ao menu principal ?[s/n]\n";
	cin >> value; 
	
	if(value == 's' || value == 'S'){
		goto start;
	}else{
		cout << "\n\n Obrigado pela atencao";
	}
}

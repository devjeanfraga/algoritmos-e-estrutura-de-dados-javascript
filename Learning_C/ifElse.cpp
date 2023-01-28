#include <iostream>
#include <stdlib.h>
using namespace std;

int main(){
	
	int nota1, nota2, med;
	char opc;
	
inicio:

system("cls");	

cout << "Por gentileza insira sua nota av1:  \n";
cin >> nota1;

cout << "Por gentileza insira sua nota av2: \n";
cin >> nota2;

med=(nota1+nota2)/2;

if(med >=70 ){
	cout << "Parabens a sua nota e : " << med << " e voce passou! \n\n";
}else{
	cout << "Quase la, mas nao desista, sua nota foi: " << med ;
}
	
cout << "\n\nDeseja por por outras notas?[s/n] \n";
cin >> opc;

if(opc == 's' || opc == 'S'){
	goto inicio; 
}

	
	return 0;
}

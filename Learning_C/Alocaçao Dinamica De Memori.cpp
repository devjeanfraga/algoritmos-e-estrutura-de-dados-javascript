#include <iostream>
#include <stdio.h> //function "gets()"
#include <stdlib.h>//fucntion "malloc()" 

using namespace std;

int main(){
	char *name;
	name=(char *) malloc(sizeof(char)+1);
	
	//malloc pede pra indicar o tamanho do bloco
	//E é mais funcional indicar o sizeof();
	//que retorna o tamanho de determinado elemento;
	
	//malloc retorna void
	//por isso é importante fazer um tapeCast (char *)
	//para converter o retorno da function malloc
	
	
	gets(name);// tipo de cin;
	cout << "\n\n" << name << endl;
	
	cout << sizeof(int);
	
	return 0;
}

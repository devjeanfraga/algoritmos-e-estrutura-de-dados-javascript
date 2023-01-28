#include <iostream>
#include <string.h>
using namespace std;

int main(int argc, char *argv[]){
	
	if(argc >1){
		//a fuction strcmp() retorna 1 caso as strings sejam diferentes
		if(!strcmp(argv[1], "sol")){
			cout << "vou a praia\n\n";
		}else if(!strcmp(argv[1], "nublado")){ 
			cout << "vou ao cinema\n\n";
		}else{
			cout << " Vou ficar em casa\n\n"; 
		}
	}
	
	
	
	return 0;
}

#include <iostream>
#include <stdlib.h>
using namespace std;



int main(){
	char word[30], letra[1], secret[30]; 
	int tam, i, chances, acertos; 
	bool acerto=false;
	
	chances=6;
	tam=0; //quantidade de caracteres da palavra digitada;
	i=0; //index;
	acerto=false;
	acertos=0;
	
	cout << "Por gentileza, diga ao seu amigo para tampar os olhos e digitar a palavra secreta:\n "; 
	cin >> word; 
	system("cls");
	
	//verifica o tamanho da palavra digitada por meio do "\0"
	//"\0" é o caracter do ENTER, quando a pessoa digitar a palavra e
	// pressionar o enter, o "\0" é adicionado após a palavra, indicando
	//que ali terminoua string.  
	while(word[i] != '\0'){
		//aqui se passa para proximo indice;
		i++;
		//Aqui obtemos o lenght da palavra;
		tam++;
	}
	
	//tela secreta 
	for(i=0; i<30; i++){
		secret[i]='-';
	}
	
	while((chances > 0 ) && (acertos < tam )){
	 cout << "chances restantes: " << chances << "\n\n" ;
	 cout << "Palavra secreta: ";
	 
	 
	 //demonstra em tela o tamnho da palavra secreta em tracinhos
	 //Digitada pela pessoa.
		for(i=0;i<tam; i++){
			cout <<  secret[i];
		} 	
		
		cout << "\n\nDigite uma letra:";
		//armazenar a letra na var letra na posicao 0;
		cin >> letra[0]; 
		
		
		
		//verificar se essa letra existe dentro da palavra secreta
		//O Tam é o lenght
		for(i=0; i < tam; i++){
			//Se qualquer indice da word for igual a letra recebida
			if(word[i] == letra[0]){
				acerto = true;
				//COPIAR
				secret[i]=word[i]; 
				acertos++; 
			}
		}
		if(!acerto){
			chances--;
		}
		acerto=false;
		system("cls");	
	}
	if(acertos==tam){
		cout << "Voce Venceu!!!!!! :)\n\n";
	}else{
		cout << "Haaaa Que pena você perdeu! :/";
	}
	system("pause");
	return 0; 
}

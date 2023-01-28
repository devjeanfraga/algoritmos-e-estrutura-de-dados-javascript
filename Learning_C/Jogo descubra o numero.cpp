#include <iostream>
#include <string>

//não funciona!
using namespace std;

int main(){
	int numbers[10];
	int index, num;
	
	
	
	for(index=0;index<=9;index++){
		cout << "\n informe um numero por gentileza \n";
		cin >> numbers[index];
	}
		 cout << "\n\n***Vez do segundo jogador***\n\n";
	 
	 cout << "Tente adivinhar o numero da lista por gentileza \n";
	 cin >> num ;
	 
	 index=0;
	 int tentativas=0;
	 bool find = false;
	 find; tentativas;
	 while(find && tentativas<=3){
	 	
	 	while(find){
	 		for(index=0;index<=9;index++){
	 			if(num==numbers[index]){
	 			find= true;
				};
			 }
		}
		 	if(find){
			tentativas+=1;

				cout << "Foi mal, numero nao encontrado\n";
				cout << "Tentativa" << tentativas << "\n"; 
				cout << "Que numero acha que foi informado?\n";
				cin >> num;
				index=0;
			}
		}
		
		return 0;
		
	 }
	 


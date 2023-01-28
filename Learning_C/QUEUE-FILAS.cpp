#include <iostream>
#include <string>
#include <queue>

using namespace std; 

int main(){
	
	queue <string> cards; 
	
	cards.push("arpias");
	cards.push("goblins");
	cards.push("espirito de fogo");
	cards.push("cavaleiro");
	cards.push("barbaros");
	cards.push("mago de gelo");
	
	while(!cards.empty()){
		cout << "Tamanho da fila: " << cards.size() << "\n";
		cout << "primeira card: " << cards.front() << "\n";
		cout << "ultima card: " << cards.back() << "\n\n"; 
		cards.pop(); 
		
		if(cards.empty()){
			cout << "\n\nAgora sim a FILA esta vazia :)"; 
		}
	}
	
	return 0;
}

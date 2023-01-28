#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main(){
	
	stack <string> cards;
	
	string topCard;
	
	cards.push("goblins");
	cards.push("mago de gelo");
	cards.push("barbaros");
	cards.push("principe");
	cards.push("espiritos de fogo");
	cards.push("morcegos"); 
	 
	
	while(!cards.empty()){
		
		cout << "\nTamanho da pilha: " << cards.size() << "\n";
		cout << "Card do topo da pilha: " << cards.top() << "\n\n";
		
		cards.pop();
		
		
		//cout << "Novo tamanho da pilha: " << cards.size() << "\n";
		//cout << "Nova card do topo: " << cards.top() << "\n\n";
		
		if(cards.empty()){
			cout << "\n\nAgora sim a pilha esta vazia!!"; 
		}else{
			cout << " A pilha ainda esta cheia de cards\n\n";
		}
	}
	
	return 0;
}

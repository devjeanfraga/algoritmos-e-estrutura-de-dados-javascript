#include <iostream>
#include <string>

using namespace std;

int main(){
	
	int index;
	string vogais[5];
	
	for(index=0; index<=4; index++){
		
		cout << "Insira a vogal\n";
		cin >> vogais[index];
	}
	
	for(index=4;index>=0; index--){
		
		cout << "\n" << index+1 << "-" << vogais[index]<< "\n";
	}
	
	
}

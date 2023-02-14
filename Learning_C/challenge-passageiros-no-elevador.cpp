#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  	int read, maxCapacity;
  	
	cin >> read >>  maxCapacity;
	int flow = 0;
	bool isOver = false;
	while(read--) {
		int out, in; 
		cin >> out >> in;
		flow = (flow - out) + in; 
		if ( flow > maxCapacity ) {
			isOver = true;
			break;		
		};
	}; 
	
	cout << (isOver ? 'S' : 'N'); 

  	return 0;
};

/*
	for(int i = 0; i < read; i++) {
		int out, in; 
		cin >> out >> in;
		flow = (flow - out) + in; 
		if ( flow > maxCapacity ) {
			isOver = true;
			break;		
		};
	}; 
*/

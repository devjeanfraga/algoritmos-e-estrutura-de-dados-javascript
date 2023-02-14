#include <iostream>
#include <vector>
using namespace std;

int main() {
  // Escreva seu código aqui
  	int invited = 1;
	vector < vector<int> > list;
  	vector <int> winningTickets;
	
	while (cin >> invited && invited !=0) {
		
	    vector <int> listOrderArrival(invited);
	    winningTickets.push_back(invited);
	    
	    for(int j = 0; j < invited; j++ ) {
	    	int val; 
	        cin >> val;
	        listOrderArrival[j] = val; 
	    };
	    
	    list.push_back(listOrderArrival);
	}; 

  	for(int j = 0; j < list.size(); j++ ) {
    	for(int k = 0; k < list[j].size(); k++ ) {
      		if (list[j][k] == k+1) cout << "Teste " << j+1 << endl << list[j][k] << endl << endl;
    	};
		
  	};
  	
  	return 0;
};

/*
4
4 5 3 1
10
9 8 7 6 1 4 3 2 12 10

	
	for(int j = 0; j < list.size(); j++ ) {
    	for(int k = 0; k < list[j].size(); k++ ) {
      		cout << list[j][k] << ' ';
    };
		cout << endl;
  	};

*/

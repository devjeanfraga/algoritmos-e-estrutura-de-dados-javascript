#include <iostream>
#include <vector>
using namespace std;

struct Deposit {
  int joao, zezinho;
};
int main() {
  // Escreva seu código aqui
  vector < vector<Deposit> > listTests;
  int qtyTest; 

	/***Handle inputs***/
  while (cin >> qtyTest && qtyTest !=0) {
    vector <Deposit> listDeposit (qtyTest);
    
	for(int i = 0; i < listDeposit.size(); i++) {
    	Deposit value;
		cin >> value.joao >> value.zezinho;
		listDeposit[i] = value; 		
	};
	listTests.push_back(listDeposit); 
  };
  
  /***Processing Data and Handle output***/
   int diff = 0;
  for(int i = 0; i < listTests.size(); i++) {
		cout << "Teste " << i+1 << endl;
  	for(int j = 0; j < listTests[i].size(); j++) {
  		Deposit children = listTests[i][j];
		diff = (children.joao - children.zezinho) - diff * (-1);  
		cout << diff << endl; 		
	  };
	  cout << endl; 
  };
  
  return 0;
};

/*
  Input 
  N int, 
  deposito n1 -> J, Z;
  deposito n2 -> J, Z;
  deposito n3 -> J, Z;
  0 para indicar o final dos inputs;

  Output
  Teste n1...
  ATENÇÃO DIFF EM CENTAVOS
  deposito n1 -> diff = J Z;
  deposito n2 -> diff = J Z;
  deposito n3 -> diff = J Z;
  LINHA EM BRANCO
  
  testes[
  test1<lista de depositos>[
    deposito[j,z]
    deposito[j,z]
  ]
]
*/

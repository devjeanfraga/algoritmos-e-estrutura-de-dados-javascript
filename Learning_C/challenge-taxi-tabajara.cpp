#include <iostream>
using namespace std;

int main() {

	float alcohol, gasoline,  AlcoholEfficiency, gasolineEfficiency;
	cin >> alcohol >> gasoline >> AlcoholEfficiency >> gasolineEfficiency;
	
	bool isGasoline = gasoline <= alcohol;
	if(isGasoline) cout << 'G'; 
	else cout << 'A';
  return 0; 
};


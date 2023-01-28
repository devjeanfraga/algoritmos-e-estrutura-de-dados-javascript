#include <iostream>
#include <iomanip>

using namespace std;

int main () {
	// 1milha é 1.60934km 
	float milhas; 
	cin >> milhas; 
	
	cout << fixed << setprecision(2) << milhas/0.62137 << endl;    
	return 0; 
};

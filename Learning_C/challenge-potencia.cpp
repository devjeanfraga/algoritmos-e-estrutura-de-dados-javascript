#include <iostream>
#include <iomanip>

using namespace std;

int main () {
	int n, result = 1;
	cin >> n;
	
	for (int j = 0; j < n; j++) result *= 2; 
	
	cout << result << endl;
	return 0; 
};

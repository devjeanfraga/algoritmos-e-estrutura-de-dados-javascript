#include <iostream>
#include <string>

using namespace std;

int main () {
	int n, j = 0, prev = 1, current = 1; 
	cin >> n;
	
	int numbers[n];
	for (int i = 0; i < n; i++) {
		cin >> numbers[i];
	};
	
	while (j < n-1) {
		
		if (!(numbers[j+1] > numbers[j])) {
			prev = current > prev ? current : prev;
			current = 0;
		};
		
		current += 1; 
		j += 1;  	
	};
	
	int result = prev > current ? prev : current; 
	
	cout << result << endl;
	return 0; 
};

//12
//10 11 12 1 2 3 0 2 4 6 8 9

//10
//1 2 3 4 5 6 3 2 1 0

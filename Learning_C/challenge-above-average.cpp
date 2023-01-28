#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main() {
	int n, counter = 0;
	cin >> n;
	int grades[n];
	int soma =  0; 
	
	for (int i=0; i < n; i++) {
		cin >>  grades[i];
		soma += grades[i]; 
	};
	
	float average = soma/2; 
	
	for (int j = 0; j < n; j++) {
		 grades[j] > average ? counter += 1 : counter;   
	}; 
	
	cout << counter;
    return 0;
}

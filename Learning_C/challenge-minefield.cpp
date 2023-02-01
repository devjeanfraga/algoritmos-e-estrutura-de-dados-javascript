#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int n;
  cin >> n; 
  
  int mineField[n], res[n]; 
  for (int j = 0; j < n; j++) cin >> mineField[j]; 
  
  int left, right, curr, i = 0;
  while (i < n) {
  	curr = mineField[i], 
	left =  mineField[i-1] != 0 && mineField[i-1] != 1 ? 0 : mineField[i-1];
	right = mineField[i+1] != 0 && mineField[i+1] != 1 ? 0 : mineField[i+1] ;
		
	res[i] = left + curr + right;  
	i += 1;  
  };
  
  for (int j = 0; j < n; j++) cout << res[j] << endl; 
  return 0;
};

/*
Second Solution

#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int n;
  cin >> n; 
  
  int mineField[n], res[n]; 
  for (int j = 0; j < n; j++) cin >> mineField[j]; 
  
  int left, right, curr, i = 0;
  while (i < n) {
  	curr = mineField[i], left = mineField[i-1], right = mineField[i+1];
	i != 0 
		? res[i] = left + curr + right 
		: res[i] = curr + right;
	i += 1;  
  };
  
  for (int j = 0; j < n; j++) cout << endl << res[j] << endl; 
  return 0;
};

*/

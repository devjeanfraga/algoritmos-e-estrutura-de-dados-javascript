#include <iostream>

using namespace std;

int main () {
  int n;
  cin >> n;
  int matriculas[n];
	
  for (int j = 0; j < n; j++) cin >> matriculas[j]; 

  for (int i = n-1; i >= 0; i--) {
    cout << matriculas[i] << " "; 
  }
  
	return 0; 
};

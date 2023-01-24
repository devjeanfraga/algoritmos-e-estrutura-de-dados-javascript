#include <iostream>
using namespace std;

int fatorial(int n);

int main() {
  // Escreva seu código aqui
  int n; 
  cin >> n; 
  int res = fatorial(n);
  cout << res << endl;
  return 0;
};

int fatorial (int n ) {
	int res[n+10]= {0,1,2};
	if (res[n]) return n;  
	if (n > 2 && n < 13) {
		for(int i = 3; i <= n; i++) {
    		res[i] = res[i-1] * i;  
  		};	
	};
	return res[n]; 
};



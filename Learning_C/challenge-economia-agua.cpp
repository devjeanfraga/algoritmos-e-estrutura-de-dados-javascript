#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
	int c, res = 7;
	cin >> c;
	if (c > 10) {
		for (int i = 10; i <= c; i++ ){
			if(i >= 11 && i <= 30) res += 1;
			if(i >= 31 && i <= 100) res += 2;
			if(i >= 101) res += 5;
		};		
	};
	cout << res << endl;

  return 0;
}; 

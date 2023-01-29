#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int c1, c2, c3, c4, c5;
  cin >> c1 >> c2 >> c3 >> c4 >> c5;
  
  bool isCres = (
  		c1 < c2 &&
		c2 < c3 && 
		c3 < c4 &&
		c4 < c5
	);

 bool isDec = (
  		c1 > c2 &&
		c2 > c3 && 
		c3 > c4 &&
		c4 > c5
	);
		
  if (isCres) cout << 'C';
  else if (isDec) cout << 'D';
  else cout << 'N' << endl;  

  return 0;
}; 

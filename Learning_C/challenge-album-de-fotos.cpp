#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int x, y;
  int l,h;
  char res;
  bool isFit; 	
  cin >> x >> y ;
  cin >> l >> h ;
  
  isFit = x - l <= 0 || y - h <= 0;
  if (!isFit) {
  	x = x - l;  
	y = y - h;
  };
  
  cin >> l >> h;
  res = !isFit && (x-l >= 0 || y-h >= 0) ? 'S' : 'N';	
  cout << res << endl; 
  
  return 0;
}

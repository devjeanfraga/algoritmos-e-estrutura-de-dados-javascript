#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
	int x, y, limitY = 468;
	cin >> x >> y;

	bool isOutBall = (x < 0 || x > 432) || (y < 0 || y > 468); 
	cout << (isOutBall ? "fora" : "dentro")<< endl;

  return 0;
}; 

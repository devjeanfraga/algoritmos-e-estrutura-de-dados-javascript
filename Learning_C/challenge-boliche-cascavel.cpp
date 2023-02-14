#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

int main() {
	
	int D, A,  L, P;
		
	cin >> D;
	cin >> A >> L >> P;
	
//	D = (D/2);
//	D = D*D;
//	int sphereArea = 3.14 * D; 
//	int squareArea = A*L*P; 
	bool isGratherThanTheBox = (D > A || D > L) || D > P; 
		
	char result = isGratherThanTheBox ? 'N' : 'S'; 
	//sphereArea < squareArea ? 'S' : 'N';
		
	cout << result; 
  return 0; 
};


#include <iostream>
using namespace std;
struct Square{
	long int initialX, initialY;
  long int finalX, finalY;
};

int main() {
  // Escreva seu código aqui
  Square squares[2];
  for(int i = 0; i < 2; i++) {
  	Square obj;
  	cin >>  obj.initialX >> obj.initialY >> obj.finalX >> obj.finalY;
  	squares[i] = obj; 
  };

  bool isCrashInitialToFinal = (squares[1].initialX < squares[0].finalX) && (squares[1].initialY < squares[0].finalY);
  bool isCrashfinalToInitial = (squares[1].finalX < squares[0].initialX) && (squares[1].finalY < squares[0].initialY);
  bool isCrash = israshInitialToFinal || isCrashfinalToInitial; 

	cout << isCrash;
  return 0; 
};
  
/*
  int isCrash = (
 	((squares[1].initialX - squares[0].finalX) <= 0 && 
	(squares[1].initialY - squares[0].finalY) <= 0) ||
 	((squares[1].finalX - squares[0].initialX) <= 0 && 
	(squares[1].finalY - squares[0].initialY) <= 0)
	);

OBJ - Determinar se dois objetos se interceptam ou não; 

input long int 
obj 1 - x-inicial, y-inicial | x-final, y-final;
obj 2 - x-inicial, y-inicial | x-final, y-final;

output bool | int ? 0 se não tiver colisão e 1 se tiver colisão;
*/

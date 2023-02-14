#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

struct Student {
	char name[20];
	int score = 0;
	int instancia;  
};
bool isSwap (string leftName, string rightName ); 

int main() {
  // Escreva seu código aqui	
	int qtyStudents, i = 0;
	cin >> qtyStudents;  
	
	Student infelizes[qtyStudents], student, infeliz;
	
	while( i < qtyStudents) {
		
		student.instancia = i; 
		cin >> student.name >> student.score; 
		infelizes[i] = student;
		++i;
	};
	
	infeliz = infelizes[0];
	for (int i = 1; i < qtyStudents; i++ ) {
		if (infelizes[i].score < infeliz.score)	infeliz = infelizes[i];
		
		if (infelizes[i].score == infeliz.score) {
			if(infelizes[i].name > infeliz.name ) {
				infeliz = infelizes[i];
			};
		};
//		cout << endl << "name: " << infelizes[i].name << endl;
//		cout << "score: " << infelizes[i].score << endl;
//		cout << "instancia: " << infelizes[i].instancia << endl;
	};
	
	cout << endl << "Instancia " << infeliz.instancia << endl;
	cout << infeliz.name << endl; 
  return 0;
};

//bool isSwap (string leftName, string rightName ) {
//	bool swap = false; 
//	int len = sizeof(leftName) < sizeof(rightName) ? sizeof(leftName) : sizeof(rightName);
//	for (int k = 0; k < len; k++) {
//		if (int(leftName[k]) - int(rightName[k]) < 0) {
//			swap;
//			break;
//		} else {
//			swap= true;
//			break;
//		};   
//	};
//	return swap;  
//}; 


/*



};

*/


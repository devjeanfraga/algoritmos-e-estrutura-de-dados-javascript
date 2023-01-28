#include <iostream>
#include <iomanip>

using namespace std;

int main () {
	char op; float a, b; 
	
	cin >>op >> a >> b;
	
	switch (op) {
		
		case '+': 
			cout << a+b << endl;
			break;		 
		
		case '-': 
			cout << a-b << endl; 
			break;
			
		case '/': 
			cout << fixed << setprecision(1) << a/b << endl;
			break;
			
		case '*': 
			cout << a*b; 
	 		break;
	}; 
	
	
	return 0; 
}

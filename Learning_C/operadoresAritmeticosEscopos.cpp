#include <iostream>
using namespace std;

int n1, n2;

int main(){
	
	int n3, n4, res;
	
	n1=10;
	n2=30;
	n3=20;
	n4=50;
	
	res= (((n1+n2+n3+n4)-10)*2)/5;
	
	cout <<  "\n O resultado dessa operacao e:" << ++res << "\n\n";
	
	res= -res;
	
	cout << res <<  " valor invertido \n\n"; 
	
	return 0;
}

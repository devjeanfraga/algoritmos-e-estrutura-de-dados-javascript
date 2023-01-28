#include <iostream>

using namespace std;


void soma();
void soma(int n1, int n2);

int main (){
	
	soma();
	soma(10,90);
	return 0;
}


void soma(int n1, int n2){
	
	int res;
	res= n1+n2;
	cout<< "\nA soma da fuction soma com args e igual a: " << res << "\n\n";
}

void soma(){
	 int n1, n2,res;
	 
	 n1=10;
	 n2=35;
	 res= n1+n2;
	 
	 cout << "A soma de "<< n1 << " + " << n2 << " e igual a : " << res << "\n\n"; 
	 
}

#include <iostream>
using namespace std;

void contador(int num, int cont=0);
int fatorial(int n);
int fibonacci(int n);

int main(){
	
	int value, res;
	
	value= 8; 
	 res = fatorial(value);
	cout << "fatorial de "<< value << " e : " << res;   
	//contador(20);
	
	cout << "\n\n Fibonacci com " << value << "valores\n";
	
	for(int i= 0; i<value; i++){
		cout << fibonacci(i+1) << "\n"; 
	}
	
	
	
	return 0;
}

void contador(int num, int cont ){
		cout << cont<< "\n";
		if(num>cont){
			contador(num, ++cont);
		}	
}

int fatorial(int n){
	if(n==0){
		return 1;
	}
		return n*fatorial(n-1);
}
 
 int fibonacci(int n){
 	if(n==1||n==2){
 		return 1;
	 }else{
	 	return fibonacci(n-1)+fibonacci(n-2);
	 }
 }
	   
	


#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int n; 
  cin >> n; 
  int res = 1;
  
  for (int i = 1; i <= n; i++) {
  	res = res * i; 
  }
  
  cout << res << endl;
  return 0;
};


//int fatorial (int n ) {
//	int res[n+10]= {0,1,2};
//	
//	if (n > 2 && n < 13) {
//		for(int i = 3; i <= sizeof(res)/4; i++) {
//    		res[i] = res[i-1] * i;  
//  		};	
//	};
//	return res[n]; 
//};
  

//int fatorial (int n ) {
//  if (n < 3) return n; 
//  if( n < 0 || n > 12) return -1; 
//
//  int res[n+1]= {0,1,2};    
//  for(int i = 3; i <= n; i++) {
//    res[i] = res[i-1] * i;
//  };
//  cout << res[n] << endl;
//};

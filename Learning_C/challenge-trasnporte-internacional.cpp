#include <iostream> 

using namespace std;

int main () {
	/*
		A largura 
		B base
		c altura
		
		X largura 
		Y base
		Z altura
	*/ 
	
	int a, b, c, x, y, z; 
	cin >> a >> b >> c; 
	cin >> x >> y >> z;
	if (b >= a && y >= x ) {
		int m2Cont = a*b, m2Nav = x*y; 	
		int res = m2Nav % m2Cont == 0 ? (z/c) * (m2Nav/m2Cont) : 0;
		cout << res << endl; 	
	}; 
	//cout << (x/a)*(y/b)*(z/c) << endl; 

	return 0; 
}; 

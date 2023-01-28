#include <iostream>
#include <string>

using namespace std;

int main () {
	string name; int i;
	cin >> name;
	string grupos[] = {"GRUPO A", "GRUPO B", "GRUPO C"};
	int size = name.length();
	i = size <= 4 ? 0 : size > 4 && size <= 10 ? 1 : 2; 
	cout << grupos[i] << endl;
	return 0; 
};

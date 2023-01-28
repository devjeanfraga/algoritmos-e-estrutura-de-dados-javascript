#include <iostream>
#include <iomanip>

using namespace std;

int main () {
	float payment;
	cin >> payment; 
	
	float increase = payment / 100;
	int multiplier; 
	
	if (payment > 400 && payment < 800.01) multiplier = 12; 
	if (payment > 800  && payment < 1200.01) multiplier = 10; 
	if (payment > 1200 && payment < 20000.00) multiplier = 7;
	if (payment > 20000.00) multiplier = 4;
	else multiplier = 15;
	
	increase =  increase * multiplier;
	float newPayment = payment + increase; 
	
	
	cout << "Novo salario: " << setprecision(5) << newPayment <<  endl;
	cout <<"Reajuste ganho: "<< setprecision(5) <<  increase << endl;
	cout << "Em percentual: " << increase << "%" << endl; 
	
	
	//cout << setprecision(5) << res << endl;  
	
	return 0; 
}
#include <iostream>
#include <iomanip>

using namespace std;

int main () {
	float payment;
	cin >> payment; 
	
	float increase = payment / 100.00;
	int multiplier; 
	
	if (payment < 400.01) multiplier = 15; 
	if (payment > 400 && payment <= 800) multiplier = 12; 
	if (payment > 800  && payment <= 1200) multiplier = 10; 
	if (payment > 1200.00 && payment <= 2000.00) multiplier = 7;
	if (payment > 2000.00) multiplier = 4;
	
	
	increase =  increase * multiplier;
	float newPayment = payment + increase; 
	
	
	cout << "Novo salario: "<< fixed << setprecision(2) << newPayment <<  endl;
	cout <<"Reajuste ganho: "<< setprecision(2) <<  increase << endl;
	cout << "Em percentual: " << setprecision(0) << multiplier << " %" << endl; 
	
	
	//cout << setprecision(5) << res << endl;  
	
	return 0; 
}

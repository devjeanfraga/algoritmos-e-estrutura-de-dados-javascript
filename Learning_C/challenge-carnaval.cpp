#include <iostream>
#include <iomanip>
using namespace std;

int main() {
	// .data; 
	float score[5]{}, result = 0;
	int biggest =  4.9, smallest =  10.1;
	int maxId, minId; 
	
	/***handle inputs***/
	for (int i = 0; i < 5; i++) cin >> score[i];
	
	/***handle min and max data value***/
	for (int i = 0; i < 5; i++) {
		
		 if (score[i] > biggest) {
		 	 biggest = score[i];
		 	 maxId = i; 
		 };
		 
		 if(score[i] < smallest) {
		 	smallest = score[i];
		 	minId = i; 
		 };
	};
	
	if (maxId == minId) minId += 1;  
	score[maxId] = 0;
	score[minId] = 0;
	
	/***handle output***/
	for (int i = 0; i < 5; i++) result += score[i];	
	cout << fixed << setprecision(1) << result;  
  return 0; 
};

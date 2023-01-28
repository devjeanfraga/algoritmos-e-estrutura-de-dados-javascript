#include <iostream>
#include <vector>

using namespace std;



int main () {
	vector<int>numbers{0,20,50,15,16,3,10,9,5,6,7,2,1,10,8,12,23,30,4,17,18,19,14,80,13,11,21,1,2,90};
 	int result;
	int next=1;
	for ( auto i=numbers.begin(); i != numbers.end()-1; i++) {
		auto j= numbers.begin()++;
		for( ; j++ != numbers.end(); j++){
			
			result= *i + *j;
			
						
			if( result == 23){
				result= 23;
				cout << *i << " e " << *j << " somam 23, logo: "<< endl; 
				cout << result<< endl << endl;
			}
			;
		}
		
	}
	return 0;
}



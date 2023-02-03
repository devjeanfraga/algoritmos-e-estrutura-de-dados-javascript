#include <iostream>
#include <string>
using namespace std;

int main() {
  // Escreva seu código aqui;
  string alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  string num = "22233344455566677778889999";
  string input;
  cin >> input;
  int j = 0, i = 0;
  while(j < input.length()) {
	  while (i <  alpha.length()) {
      if(input[j] == alpha[i] && input[j] == input[j+1] ) {
        input[j] = num[i];
        input[j+1] = num[i];
        j += 2;
      } else if (input[j] == alpha[i]) input[j] = num[i];
      i += 1;	
	  };
    
  };
  string output = input;
	cout << output;
  return 0;

};

/*
M1S-TU-R4
617-88-74


	Objetivo: Converter as letras em numeros dentro da string
	intput string  ex: 0800-FALE-SBC; 1-15
	output string  0800-3253-722; 
	ABC = 2
	DEF = 3
	GHI = 4
	JKL = 5
	MNO = 6
	PQRS = 7
	TUV = 8
	WXYZ = 9
	
	012 = 2
	345 = 3
	678 = 4
	91011 = 5
	121314 = 6 
	151617 = 7
	181920 = 8
	212223 = 9
	
[ABCDEFGHIJKLMNOPQRSTUVXYZ]
[22233344455566677778889999]

int i = 0, j= 0;
while (i < alpha length) {
	input[j] == alpha[i] ? input[j] = num[i] : 
};

f(x) A + B = 26 logo a funçao nao é linear então o for encadeado é uma possivel boa solução ? 

for (int j = 0; j < sizeof(input); j++) {
	for (int i = 0; i < 26; i++) {
		if(input[j] == alpha[i] && input[j] == input[j+1] ) {
			input[j] = num[i];
			input[j+1] = num[i];
			j += 1;
		} else if (input[j] == alpha[i]) input[j] = num[i];
		
	}
}


input[i] está em alpha ? input[i] = 
	
012 = 2
345 = 3
678 = 4
91011 = 5
121314 = 6 
151617 = 7
181920 = 8
212223 = 9 


  for (int j = 0; j < input.length(); j++) {
	for (int i = 0; i <  alpha.length(); i++) {
		if(input[j] == alpha[i] && input[j] == input[j+1] ) {
			input[j] = num[i];
			input[j+1] = num[i];
			j += 1;
		} else if (input[j] == alpha[i]) input[j] = num[i];	
	};
  };

*/



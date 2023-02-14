#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int year, passedYears, leftYears, result;

  cin >> year;
  passedYears = (year - 1986) % 76;
  leftYears = 76 - passedYears;
  result = year + leftYears == year ? year + 76 : year + leftYears;
  cout << result;
  return 0;
};
/*
  input int ano; 
  output into próximo ano que passará o cometa;
  O cometa passa a cada 76 anos; Último registro foi em 1986;
  Se o ano inputado for o ano em que o cometa passar deve-se retornar  
  o próximo ano em que ele irá passar, ou seja, ano inputado + 76; 

  ultimo registro 1986; 
  step-1: (input-1976) % 76  
  step-2: 76 - resultado;
  step-3: input + resultado do step-2;
  step-4: resultado do step-3 == input ? input += 76 senão resultado do step-3;  
*/

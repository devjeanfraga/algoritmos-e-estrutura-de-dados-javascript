#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int qtyFlour, qtyEggs, qtyMilk, flour = 2, eggs = 3, milk = 5, result;
  cin >> qtyFlour >> qtyEggs >> qtyMilk;
  qtyFlour = (qtyFlour/flour);
  qtyEggs = (qtyEggs/eggs);
  qtyMilk = (qtyMilk/milk);

  bool isMinFlour = qtyFlour < qtyEggs && qtyFlour < qtyMilk;
  bool isMinEgges =  qtyEggs < qtyMilk;

  if (qtyFlour == qtyEggs && qtyMilk == qtyFlour) {
    result = qtyFlour;
  } else {
    result = isMinFlour ? qtyFlour : isMinEgges ? qtyEggs : qtyMilk;
  }; 

  cout << result; 
  return 0;
};

/*
obj: determinar a qty maxima de bolos a serem feitos 
de acordo cm a qty de materias inputados.

input int A-trigo, B-ovos e C-leite;

**restrições da receita*** 
2-farinha, 3-ovos, 5-leite;

*/

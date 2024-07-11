#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

bool isPrime (int n) {
  if (n <= 1) {
    return false;
  } 

  if (n <= 3) {
    return true;
  }

  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  double sqr = sqrt(n);

  for (int i = 5; i < sqr+1; i += 6) {
    if (n % i == 0 || n % (i+2) == 0) {
      return false;
    }
  }

  return true;
}

int main() {
  // Escreva seu código aqui
  int N;
  bool isPrimeNumber;
  while (cin >> N && N) {
    isPrimeNumber = isPrime(N);

    if (isPrimeNumber)  {
      cout << "O numero de cadeiras eh primo!" << endl;
    } else {
      cout << "O numero de cadeiras nao eh primo!" << endl;
    }
  }
  return 0;
};

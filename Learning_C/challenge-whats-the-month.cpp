#include <iostream>
#include <string>
#include <locale.h>
using namespace std;


int main() {
  setlocale(LC_ALL, "Portugese");
  // Escreva seu código aqui
int N;   
cin >> N;   
string months[12] = {"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"};
cout << months[--N]; 

return 0;
};

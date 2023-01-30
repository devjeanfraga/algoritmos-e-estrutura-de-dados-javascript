#include <iostream>
using namespace std;

int main() {
  // Escreva seu código aqui
  int n, m;

  cin >> n;
  int queue[n];
  for(int j = 0; j < n; j++) {
    cin >> queue[j];
  };

  cin >> m;
  int gotOutTheQueue[m];
  for (int j = 0; j < m; j++){
    cin >> gotOutTheQueue[j];
  };

  for (int p = 0; p < m; p++) {
    for (int c = 0; c < n; c++) {
      if( gotOutTheQueue[p] == queue[c]) queue[c] = 0;
    };
  };

  for(int z = 0; z < n; z++) {
    if(!queue[z]) continue;
    else cout << queue[z] << " ";
  }
  return 0;
}

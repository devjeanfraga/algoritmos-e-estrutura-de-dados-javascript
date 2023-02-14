 #include <iostream>
using namespace std;

int main()
{

    int quantidade, contador = 0, i = 0, saveContador = 0;
    cin >> quantidade;

    int lista[quantidade];

    if (quantidade >= 1) {
        while (i < quantidade){
            cin >> lista[i];

            if (lista[i] == (lista[i - 1] + 1) || lista[i] == (lista[i - 1] + 2)) { // 1 2 3 4 5 6 3 2 1 0 
                contador++;
                // cout << "primeiro if" << endl;
            } else {
                // cout << " entrei no else" << endl;
				
				/*Tratamento  do input atual com o input anterior*/
                if ( lista[i] < lista[i - 1] ) {
                    // cout << " entrei no if do else" << endl;

                    if (saveContador <= contador) {
                        saveContador = contador;
                        contador = 0;
                        contador++;
                        // cout << " entrei no saveContador" << endl;
                    } else {
                        contador = 0;
                        contador++;
                        // cout << " entrei no zera contador" << endl;
                    };
                } else {
                    contador++;
                    // cout << " entrei no else do else" << endl;
                };
            };
            i++;
        };
        
		/* Tratamento do output*/
        if (contador >= saveContador) {
            cout << contador << endl;
        } else {
            cout << saveContador << endl;
        };
    };

    return 0;
}

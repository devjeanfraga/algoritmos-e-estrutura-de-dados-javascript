#include <iostream>
#include <stdlib.h>
#include <cstring>
#include <string>
#include <math.h>
using namespace std;

struct Node{
	char *name;
	int idade;
	
	Node(char *n=0, int age=0){ /*****ponteiros para contrutores de copias.****/
		name= strdup(n);
		idade= age;
	}
	
	Node (Node& n ){
		name= strdup(n.name);
		idade= n.idade;
	}
	
	Node& operator= (const Node& n){
			if(this != &n){
				if(name != 0){
				free(name);
				name= strdup(n.name);
				idade= n.idade;
				}	
			}	
			return *this;
		}
		

		
};


/*********ponteiros para funçoes*********/

double f(double x); // multiplica um double por 2. 

double soma(double(*f)(double), int n, int m);
/*o parametro double(*f) siginifica o ponteiro para uma funçao do tipo double. 
Aqui (double) significa que o retorno tbm será do tipo double 
Os parenteses em torno de *f denotam precedencia. 
*/

double raiz(double (*f)(double), double a, double b, double epsilon);
/*Encontra uma raiz de função continua em um intervalo, a raiz é encontrada bissectando-se repetitivamente um intervalo
e encontrando o ponto médio do intervalo corrente, se o ponto médio for 0 ou se o intervalo for menor que um valor pequeno
o ponto médio é retornado*/
/*Se o valores da função no limite esquerdo do intervalo corrente e o ponto médio tiverem sinais oposto, a pesquisa
continua na metade da esquerda do intervalo corrente, caso contrario, o intervalo corrente torna-se sua metade direita*/

int main(){
	
	Node obj1("jean", 28), obj2(obj1), obj3("jorge", 45); 
	
	strcpy(obj2.name, "Joao");
	obj2.idade=20;
	obj3.idade=obj1.idade;
	cout<< obj1.name<<" "<< obj1.idade << endl;
	cout<< obj2.name<<" "<< obj2.idade << endl;
	cout<< obj3.name<<" "<< obj3.idade << endl;
	
	cout << "\n\n"<< soma(f,10,15)<< endl; 
	cout << "\n\n"<< raiz(f,6,10,0.3)<< endl; 

	
	return 0;
	
}
double f(double x){
	return 2*x;
}

double soma(double(*f)(double), int n, int m){
	double resultado=0;
	for(int i=n; i<=m; i++){
		resultado+=f(i);
	}
	return resultado; 
}

double raiz(double (*f)(double), double a, double b, double epsilon){
	double metade=(a+b)/2;
	while(f(metade) != 0 && fabs(b-a) > epsilon ){
		if(f(a) * f(metade) <0){
			b=metade;
		}else{
			a=metade;
			metade=(a+b)/2; 
		}
		return metade; 
	
	}
}

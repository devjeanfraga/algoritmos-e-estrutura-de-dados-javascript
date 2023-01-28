#include <iostream>

using namespace std;

void iniVetor(float *v);
void soma(int *var, int value);
// Aten��o pois a varial var atua somente dentro da fun��o e nao enchegar outras variaveis como parametros; 
//Logo � necessario passa o *var como parametro da fun��o e &num indicando seu endere�o;

int main(){
	
	//PONTEIROS COM VETORES APENAS
	int vetor[10];
	int *p; 	 //Declarando um ponteiro;
	p=&vetor[0]; //dizendo para que endere�o esse ponteiro vai apontar; O & server apenas para variaveis. 
	*p=50; 		 //Adicionando valor na index 0 do array "vetor" por meio do ponteiro;
	cout << "\n\ndereco na memoria: "<< p << "\nValor na variavel: " << *p; 
	*(++p);      // andando com o ponteiro para o proximo index do array; 
	*p=60;       //adicionando o valor;
	 cout << "\n\nEndereco na memoria: "<< p << "\nValor na variavel: " << *p << "\n\n"; 	
	
	
	
	//PONTEIROS COM FUNCTION E VETORES(ARRAYS)
	float vet[5];
	iniVetor(vet); 
	for(int i= 0; i<5; i++){
		cout << vet[i] << "\n"; 	
	}
	
	
	//PONTEIROS DIFEREN�A DE ESCOPO
	int num; 	
	num=0;
	
	soma(&num,20);
	cout << "\n\n"<< num; 
	
	
	

}

void iniVetor(float *v){
	
	v[0]=2;
	v[1]=2;
	v[2]=2;
	v[3]=2;
	v[4]=2;	
}

void soma(int *var, int value){
	*var+=value; 
}

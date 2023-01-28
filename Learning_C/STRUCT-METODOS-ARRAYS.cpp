#include <iostream>
#include <string>

using namespace std;

struct Carro{
	string name, color;
	int pot, vel=0, velMax;
	
	
	/****Métodos da struc Carro****/
	void insert(string stName, string stColor, int stPot, int stVelMax ){
		name= stName;
		color= stColor;
		pot= stPot;
		velMax= stVelMax;
	}
	
	void show(){
		cout << "Nome.............: " << name   <<   "\n";
		cout << "Cor..............: " << color  <<   "\n";
		cout << "Potencia.........: " << pot    <<   "\n";
		cout << "Velocidade Atual.: " << vel    <<   "\n";
		cout << "Velocidade Maxima: " << velMax <<   "\n\n";	
	}
	
	void chengeVel(int setVel){
		vel=setVel;
		if(vel > velMax){
			vel=velMax;
		}
		if(vel <  0){
			vel=0;
		}
	}
};

int main(){
	
	
	Carro *carros=new Carro[5]; /* Associando struct com vetores(Arrays): O struc Carro ref. carros= new struct Carro em formato de vetor = Carro[5]*/
	Carro car1, car2, car3, car4, car5;
	
	carros[0]=car1;
	carros[1]=car2;
	carros[2]=car3;
	carros[3]=car4;
	carros[4]=car5;
	
	
	carros[0].insert("Audi-Q8", "Bronze",340, 250);
	carros[1].insert("Audi-Q7", "Vermelho", 340, 230);
	carros[2].insert("Audi-R8", "Branco", 610, 330); 
	carros[3].insert("Audi-Q3", "Chumbo", 150, 207);
	carros[4].insert("Audi-A1", "Azul", 125, 227);
	
	carros[0].chengeVel(400);
	
	for(int i=0; i<5; i++){
		carros[i].show();
	}
	
	
	
	/**/
	return 0;
}

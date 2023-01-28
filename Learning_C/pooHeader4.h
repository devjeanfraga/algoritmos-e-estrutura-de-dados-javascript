#ifndef CLASSES_H_INCLUDED
#define CLASSES_H_INCLUDED

class Veiculo{
	public:
		int velocidade;
		int blindagem;
		int rodas; 
		
		//set privates;
		void setTipo(int tp);
		void setVelMax(int vm);
		void setArmas(bool ar);
		
		//show
		void show();
		
	private:
		int tipo;
		int velMax;
		int armas;  
		
};



void Veiculo::setTipo(int tp){
	tipo=tp;
}

void Veiculo::setVelMax(int vm){
	velMax=vm;
}

void Veiculo::setArmas(bool ar){
	armas=ar; 
}

void Veiculo::show(){
	std::cout << "tipo de veiculo.....:" << tipo      << std::endl;
	std::cout << "Velocidade Maxima...:" << velMax    << std::endl;
	std::cout << "Quantidade de rodas.:" << rodas     << std::endl;
	std::cout << "Blindagem...........:" << blindagem << std::endl;
	std::cout << "Armammento..........:" << armas     << std::endl;
	std::cout << ".................................." << std::endl;
}


class Moto:public Veiculo{
	public:
		Moto();
};
Moto::Moto(){
	velocidade=0;
	blindagem=0;
	rodas=2;
	setTipo(1);
	setVelMax(350);
	setArmas(true); 
	//show nao funcionaria aqui nesta classe
	//Aqui teriamos de usar o get.
};


class Carro:public Veiculo{
	public:
		Carro();
};
Carro::Carro(){
	velocidade=150;
	blindagem=50;
	rodas=4;
	setTipo(5);
	setVelMax(480);
	setArmas(false); 
	//show nao funcionaria aqui nesta classe
	//Aqui teriamos de usar o get.
};


class Tanque:public Veiculo{
	public:
		Tanque();
};

Tanque::Tanque(){
	velocidade=50;
	blindagem=35;
	rodas=6;
	setTipo(3);
	setVelMax(70);
	setArmas(true); 
};


//HERANÇA MULTIPLA;

 class Fogo{
 	public:
 		void fire();
 };
 
 void Fogo::fire(){
 	std::cout << "FOGO\n"<< std::endl;  
 }
 
 
 class Agua{
 	public:
 		 void water();
 };
 
 void Agua::water(){
 	std::cout << "AGUA\n"<< std::endl; 
 }
 
 class Terra{
 	public:
 		void earth();	
 };
 
void Terra::earth(){
	std::cout << "TERRA\n"<< std::endl; 
}

class Ar{
	public:
		void air();
};

void Ar::air(){
	std::cout << "Ar\n"<< std::endl; 
}

class Avatar:public Fogo, public Agua, public Terra, public Ar{		
};














#endif

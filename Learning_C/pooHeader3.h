#ifndef POOHEADER_H_INCLUDED
#define POOHEADER_H_INCLUDED

class Veiculo{
	public:
		int vel;
		int tipo;
		Veiculo(int tp);//metodo Construtor é chamado automaticamento ao instanciar a classe
		int getVelMax();
		bool getLigado();
		void setLigado(int lg);
		
	private:
		std::string name;
		bool ligado;
		int velMax;
		int setVelMax(int vm); 
};

Veiculo::Veiculo(int tp){
	if(tp==1){
		name="Carro";
		setVelMax(200);
	}else if(tp==2){
		name=="Aviao";
		setVelMax(300);
	}else if(tp==3){
		name="Navio";
		setVelMax(400);
	}
}

int Veiculo::getVelMax(){
	return velMax; 
}

int Veiculo::setVelMax(int vm){
	velMax=vm; 
}

bool Veiculo::getLigado(){
	return ligado; 
}

void Veiculo::setLigado(int lg){
	if(lg==1){
		ligado=true;
	}else if(lg==0){
		ligado=false;
	}
};

#endif

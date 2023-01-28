#include <iostream>

using namespace std;

class Aviao{
	public:
		int vel=0;
		int velMax;
		string tipo;
		void ini(int tp);
		
	private:	
};

//Da classe Aviao ao método ini;
void Aviao::ini(int tp){
	if(tp == 1){
		this->velMax=800; // para esta classe a propriedade velMax vai receber 800
		this->tipo="jato";
	}else if(tp == 2){
		this->velMax=350;
		this->tipo="monomotor";
	}else if(tp == 3){
		this->velMax=250;
		this->tipo="planador";
	}	
}

int main(){
	Aviao *av1=new Aviao();
	
	av1->ini(2); 
	cout << av1->velMax;
	
	
		
	return 0; 
}

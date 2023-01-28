#ifndef POOHEADER_H_INCLUDED
#define POOHEADER_H_INCLUDED

class Aviao{
	public:
		int vel=0;
		int velMax;
		std::string tipo;
		Aviao(int tp); //prototipo "Método construtor mesmo nome da classe"; 		
		void imprimir();
	private:
};

	 Aviao::Aviao(int tp){ //metodo
	 	if(tp==1){
	 		tipo="jato";
	 		velMax=800;
		 }else if(tp==2){
		 	tipo="Monomotor";
	 		velMax=350;
		 }else if(tp==3){
		 	tipo="Planador";
		 	velMax=250;
		 }
	 }
	 
	 void Aviao::imprimir(){
	 	std::cout << "\n\nTipo.............:" << tipo  << std::endl;
	 	std::cout << "Velocidade Maxima:"     << velMax <<std::endl; 
	 }

#endif 

/*
  STACK
  É um conceito de estrutura de dados 
  onde o ultimo a entrar é o primeiro a sair. 
  É o conceito usado na recursão, por exemplo. 

  Big O Notation 

  Essa estrutura prioriza a inserção e a remoçào de elementos 
  Logo temos uma complexidade de O(1) em ambas operações. 
  Para acessar ou buscar um elemento especifico teremos um O(n).

  Pra que server ? 

  -pode ser usada para chamada de funções. 
  -operações de fazer e desfazer.
  -para redirecionar(routing) o histórico da página onde vc esteve; 
*/

class Node {
  constructor (val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /* 
    Push está sendo usado como unshift - adicona no início;
    Esse "unshift nomeado de push" é uma boa estratégia já que não é 
    preciso reindexar toda a lista devida sua estrutura ser linkada e não
    indexada como nos arrays tradicionais. caso contrário o unshift e o shift 
    teriam uma complexidade maior. 
  */
    push (val) {
      let newNode = new Node (val);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        let temp = this.first; 
        this.first = newNode
        this.first.next = temp;
        temp.prev = newNode;
      }
      return ++this.length;
    }

    pop () {
      if (this.length === 0 ) return null; 
      let popped = this.first;
      if (this.first === this.last) {
        this.last = null; 
      } 
      this.first = popped.next; 
      this.first.prev = null; 
      //popped.next =  null;
      this.length--
      //return popped.val;
      return popped.val;
    }
}
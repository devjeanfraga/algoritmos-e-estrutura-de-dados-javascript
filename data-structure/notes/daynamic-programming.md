# Objectives

- Definir o que é programação dinâmica | Define what dynamic programming is
- Explicar o que é uma sobreposição de subproblemas | Explain what overlapping subproblems are
- Entender o que uma subestrutura otimizada | Understand what optimal substructure is
- Resolver problemas usando programação dinâmica|  Solve more challenging problems using dynamic programming


## O que é programação dinâmica ?

- Método para resolver um problema complexo dividindo-o em uma coleção de subproblemas mais simples, resolvendo cada um desses subproblemas apenas uma vez e armazenando suas soluções.
- A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solution.  
OBS: This method works just with overlapping subproblems and substructures optimal.
OBS: Esse método funciona apenas com problemas que tenham sobreposição de subproblemas e subestruturas otimizadas. 


## O que é uma sobreposição de subproblemas ? 

- A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times. 
- Diz-se que um problema tem subproblemas sobrepostos se puder ser dividido em subproblemas que são reutilizados várias vezes.

### Exemplo com Fibonacci (Every number after the first two is the sum of two proceding ones) 

- 0 + 1 = 1
- 1 + 1 = 2
- 1 + 2 = 3 
- 2 + 3 = 5 ...

![overlapping example](https://github.com/JeanFragaJS/algoritmos-e-estrutura-de-dados-javascript/blob/master/assets/img-1.png?raw=true)
![no everlapping example](https://github.com/JeanFragaJS/algoritmos-e-estrutura-de-dados-javascript/blob/master/assets/img-2.png?raw=true)
![special case example](https://github.com/JeanFragaJS/algoritmos-e-estrutura-de-dados-javascript/blob/master/assets/img-3.png?raw=true)

## O que é uma subestrutura otimizada

- Diz-se que um problema tem subestrutura otimizada se uma ótima solução pode ser construída a partir de soluções otimizadas de seus subproblemas.
- A problem is said to have optimal substructure if an optimal can be constructed from optimal solutions of its subproblems. 

![substructure optimal example](https://github.com/JeanFragaJS/algoritmos-e-estrutura-de-dados-javascript/blob/master/assets/img-4.png?raw=true)
![no substructure optimal example](https://github.com/JeanFragaJS/algoritmos-e-estrutura-de-dados-javascript/blob/master/assets/img-5.png?raw=true)

## The problem of Recursive Fibonacci Solution 
 -  O problema é que essa solução repete várias das mesmas coisas muitas vezes. 
 #### Por exemplo para obtermos fibonacci de 7 repetimos várias vezes fibonacci de 5, 4, 3 e ao limite de 2. Isso torna as coisas realmente muito lentas. 
 
  ![fib](https://github.com/JeanFragaJS/algoritmos-e-estrutura-de-dados-javascript/blob/master/assets/img-6.png?raw=true)
  
#### Gera custo computacional elevado em complexidade de tempo.  
  ![Big-O](https://github.com/JeanFragaJS/algoritmos-e-estrutura-de-dados-javascript/blob/master/assets/img-7.png?raw=true)



## Solution: Memoization!! 
- Armazenar os resultados de chamadas de função e retornar o resultado armazenado em cache quando as mesmas entradas ocorrerem novamente. 


  # TREES 

  - root - the top node in a tree.
  - child - o nó diretamente conectado com outro nó. 
  - Parent - O que conversa diretamente com o child.
  - Siblings - Um grupo de nós  com o mesmo parent.
  - Leaf - Um nó sem childs. 
  - Edge - conexão entre um nó e outro. 

  ## Binary Trees 
  - Todo nó tem no máximo dois filhos. 
  - Todo nó à esquerda do nó pai é menor.
  - Todo nó à direita do nó pai é maior. 

  ### Binary search Trees 
  - Every parent node has at most two children.
  - Every node to the left of a parent node is always less than the     parent.
  - Every node to the right of a parent node is always greater then the parent.

  # Big O notation 
  - Searching O(log n )
  - Insertion O(log n )
  #### But Not Guaranteed !  




  ## Breath First Search 
  usada em arvores mais largas que profundas 
      ->  10
    ->  6    15
  ->  3  8     20

  [10,6,15,3,8,20] 


  ## Depth First Pre Order Solution
  usada em arvores de pesquisa binária para clonar ou copiar a estrutura da árvore
           ↓
       ↓   10  ↓
    ↓  6  ↓    15 ↓
    3     8       20

  [10,6,3,8,15,20]    

  ## Depth First Post Order Solution

           10  
       6   ↑  15 
    3  ↑  8   ↑   20
    ↑     ↑       ↑

  [3,8,6,20,15,10] 

## Depth First In Order Solution
  usada em arvores de pesquisa binária para recuperar os dados em ordem crescente. 

          10  
      6   ↑  15 
   3  ↑  8   ↑   20
   ↑     ↑       ↑

[3,6,8,10,15,20]    


## Binary Heaps 
##### Diferenças 
  - Binary trees, árvores que possuem apenas dois filhos; 
  - Binary Search Trees arvores que possuem dois filhos sendo o da esquerda o menor e os da direita o maior;
  - Binary Heaps, arvores  onde os nós pais possuem dois filhos: 
    - Max: Sendo o pai sempre o maior. 
    - Min: Sendo o pai sempre o menor. 
  **Observação**: Antes de ir pro filho da direita o da esquerda deve ser preenchido e vice versa. 
  
**Exemplo: Max Binary Heap**
       40
    39    35
  38 31 24 30
19 32 

## Priority Queues
  Geralmente implementada com Binary Heaps usando a propriedade priority; 
  *focada em insert e extract*
#### Big  O notation 
  insert  **O(logN)**
  extract **O(logN)**
  search  **O(N)**
//return fizz se multiplo de 3;
//return buzz se multiplo de 5;
//return fizzbuzz se multiplo de 5 e 3;
//return n se não for multiplo de 5 e 3;

function fizzBuzz(n) {
    
    if((n < 0) || (n > (10**5*2))) {
        return "invalid param"; 
    }

    if(!(n % 3 === 0) && !(n % 5 === 0)) 
        return n;
    
    if (!(n % 3 === 0) ) 
        return "Buzz";
        
    !(n % 5 === 0) ? n = "Fizz" : n = "FizzBuzz"

    return n; 
        
}

fizzBuzz(33)

function fibonacci(){
  
    let a = 0 , b = 1 , temp
    
    for(let i = 1; i <= 10; i++ ){
        temp = a + b
        console.log(temp)
        a = b;
        b = temp;
    }
    return b
}
fibonacci()

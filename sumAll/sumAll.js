var sumAll = function(firstNumber, secondNumber) {
    
if (firstNumber >=0 && secondNumber >= 0) {
    
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") return "ERROR";
    
    let sum = 0;
    
    if (firstNumber <= secondNumber) {
            
            for (i = firstNumber; i <=secondNumber; i++) {
        
            
            sum += i;
            }
   
    } else if (secondNumber < firstNumber) {
            
            for (i = secondNumber; i <=firstNumber; i++) {
        
            sum += i;
            }
    
    } else {
            
            return 'ERROR';
        
    }
     
        return sum;

}   else {
    
    return 'ERROR';
} 

} 

module.exports = sumAll

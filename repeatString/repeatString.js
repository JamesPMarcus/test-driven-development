var repeatString = function(string, num) {
  
    if (num < 0) return 'ERROR';
    
    let repeatString = '';
    
    let i = 0;
    
    while (num > 0 ) {
        
        repeatString += string;
        
        num--;
        
    }
   
    
    return(repeatString);
    
}

module.exports = repeatString

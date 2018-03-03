var ftoc = function(tempF) {
  
    convertC = (tempF - 32) / 1.8;
    
    finalTemp = Math.round( convertC * 10) / 10
    
    return finalTemp; 
}

var ctof = function(tempC) {
  
    convertF = (tempC * 1.8) + 32;
    
    finalTemp = Math.round( convertF * 10) / 10
    
    return finalTemp;
}

module.exports = {
  ftoc,
  ctof
}

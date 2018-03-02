var reverseString = function(str) {

    let str =''
    
    let strReverse = str.split('').reverse().join('');
    
    return strReverse;
    
}

module.exports = reverseString
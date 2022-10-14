// *** PALINDROMA *** 
function palindroma(str) {
    return str == str.split('').reverse().join('');
}
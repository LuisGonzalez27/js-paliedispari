"use strict";
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
const parolaInserita = document.getElementById('parola');
const btnTest = document.getElementById('btn')

const test = function(){
    let parola= parolaInserita.value;
    if(palindroma(parola)){
        document.querySelector('div').innerHTML = 'La parola ' + parola + ' è palindroma';
    } 
    else{
        document.querySelector('div').innerHTML = 'La parola ' + parola + ' non è palindroma';
    }
    document.getElementById('parola').value = '';
};

btnTest.addEventListener('click', test);

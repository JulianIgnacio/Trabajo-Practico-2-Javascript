let sumatoria = 0;

while(confirm('Le interesa realizar una suma') === true){
let numero = parseInt(prompt('Ingrese un numero'));
if(!isNaN(numero)){
    sumatoria= sumatoria + numero; 
}else{
    alert('No es un numero');
}
}
document.write(sumatoria);
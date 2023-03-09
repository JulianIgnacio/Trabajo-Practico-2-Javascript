let sumatoria = 0;

while(confirm('Le interesa realizar una suma')){
 let numero = prompt('Ingrese un numero');
 if(typeof numero === 'number'){
    sumatoria = sumatoria + parseInt(numero);
}else {
    alert('No es un numero');
} 
}
document.write(sumatoria);
let sumatoria = 0;

while(confirm('Le interesa realizar una suma')=== true){
let numero = parseInt(prompt('Ingrese un numero'));
if(typeof numero === 'number'){
    sumatoria = sumatoria + numero;
}else {
    alert('No es un numero');
} 
}
document.write(sumatoria);
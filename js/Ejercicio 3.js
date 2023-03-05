let cadena = '';

while(confirm('Le interesa formar una cadena')=== true){
    let frase = prompt('Ingrese una frase')
    cadena = cadena + frase;
}
document.write(cadena);
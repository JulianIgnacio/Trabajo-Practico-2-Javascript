let cadena = '';

while(confirm('Le interesa formar una cadena')){
    let frase = prompt('Ingrese una frase')
    cadena = cadena + frase;
}
document.write(cadena);
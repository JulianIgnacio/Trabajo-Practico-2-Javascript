let nota = prompt('Ingrese una calificacion');

switch(true){

    case nota ==='0' || nota=== '1'|| nota=== '2':
        alert('Muy deficiente');
        break;
    case nota ==='3' || nota === '4':
        alert('Insuficiente');
        break;
    case nota === '5' || nota === '6':
        alert('Suficiente');
        break;
    case nota === '7':
        alert('Bien');
        break;
    case nota === '8' || nota === '9':
        alert('Notable');
        break;
    case nota === '10':
        alert('Sobresaliente');
        break;
    case nota >= '10':
        alert('numero erroneo')
        break;
    default:
        alert('Introduce un numero invalido');
}
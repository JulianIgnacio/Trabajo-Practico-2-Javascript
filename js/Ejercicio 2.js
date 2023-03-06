let nota = prompt('Ingrese una calificacion');
if(nota >=0){
if(nota <=10 ){
    if(nota >=0 && nota <=2){
        
    }else if(nota >=3 && nota <=4){
        
    }else if(nota >=5 && nota <=6){
        alert('Suficiente');
    }else if(nota === 7){
        
    }else if(nota >=8 && nota <=9){
        alert('Notable');
    }else {
        
    }
}else{
    
}
}else{
    alert('Introduce un numero invalido')
}
switch(nota){
    case '0':
    case '1':
    case '2':
        alert('Muy deficiente');
        break;
    case '3':
    case '4':
        alert('Insuficiente');
        break;
    case '5':
    case '6':
        alert('Suficiente');
        break;
    case '7':
        alert('Bien');
        break;
    case'8':
    case '9':
        alert('Notable');
        break;
    case '10':
        alert('Sobresaliente');
        break;
    default:
        alert('numero erroneo');
}
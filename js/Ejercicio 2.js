let nota = parseInt(prompt('Ingrese una calificacion'));
if(nota >=0){
if(nota <=10 ){
    if(nota >=0 && nota <=2){
        alert('Muy deficiente');
    }else if(nota >=3 && nota <=4){
        alert('Insuficiente');
    }else if(nota >=5 && nota <=6){
        alert('Suficiente');
    }else if(nota === 7){
        alert('Bien');
    }else if(nota >=8 && nota <=9){
        alert('Notable');
    }else {
        alert('Sobresaliente');
    }
}else{
    alert('numero erroneo');
}
}else{
    alert('Introduce un numero invalido')
}
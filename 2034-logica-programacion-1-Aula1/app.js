// variables
let NumeroMaxPosible = 100;
let NumeroSecreto = Math.floor(Math.random()*NumeroMaxPosible)+1;
let NumeroUsuario = 0;
let intentos = 1;
//let PalabraVeces = 'vez';
let MaxIntentos = 6;



    while (NumeroUsuario != NumeroSecreto) {
    NumeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${NumeroMaxPosible}, por favor:`));

    console.log(typeof(NumeroUsuario));
    
    if (NumeroUsuario == NumeroSecreto){
        // acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es : ${NumeroUsuario}. Lo lograste en ${intentos} ${intentos ==1 ? 'intento' : 'intentos'}`);
    }else{
            if (NumeroUsuario > NumeroSecreto) {
            alert("El número secreto es menor");
        }else{
            alert("El número secreto es mayor");
        }
        // se incrementa el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++;
        //PalabraVeces = 'veces';
        if (intentos > MaxIntentos){
            alert(`Llegaste al número máximo de ${MaxIntentos} intentos`);
            break;
        }
        // No acertamos, fue falsa la condicion
        //alert("Lo siento, no acertaste el número");
    }
}

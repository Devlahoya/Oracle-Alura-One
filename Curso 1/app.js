//timeout para permitir que cargue el sitio antes del prompt
setTimeout(function(){
//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) +1 ;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos=5;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor, tambien puedes escribir ´cancelar´ para rendirte:`);

    if (numeroUsuario == "cancelar"){
        
        alert('Te rendiste :( ');
        location.replace('error.html');
        break;
    }

    //comparación
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero, el numero es : ${numeroUsuario}  Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        location.replace('acierto.html');
    }
        else  {
            alert(`No acertaste :( `);
            if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;

        if (intentos>maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            location.replace('error.html');
            break;
        }
        }
}
}, 1000);

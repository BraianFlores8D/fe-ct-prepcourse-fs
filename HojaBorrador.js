function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    
    var inver = 0;

    for(let i = frase.length -1; i >= 0; i--){
       inver = frase[i] + inver;
    }
    return inver;
}

console.log(inver)



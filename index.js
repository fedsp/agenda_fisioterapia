const express = require('express'); 
var modoDebug = true;
const app = express();


function PrimeiroGetDoNossoProjeto(request,resultado){
    resultado.status(200).send('Hello World 2!!!');
}


function PrimeiroPostDoNossoProjeto(request,resultado){
    try{
        resultado.status(99999999999999).send('Hello world!');
    }
    catch(Exception){
        if (modoDebug === true){
            resultado.status(500).send('Erro do servidor: '+JSON.stringify(Exception));
        }
        else{
            resultado.status(500).send('Erro do servidor.');
        }
    }
    
}

app.get('/',PrimeiroGetDoNossoProjeto);
app.post('/packs',PrimeiroPostDoNossoProjeto);
app.listen(3000);

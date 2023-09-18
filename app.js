// hacer el front de la calculadora

const sumar = require("sumar")

const process = require("process");

const {argv} = process;

function calculadora(comando) {
    switch (comando) {
        case "sumar":
           return sumar(a,b)                        
            break;
        case "restar":
            
            break;
        case "mulltiplicar":
            
            break;
        case "dividir":
            
            break;
    
        default:
            return "comando no valido"
            break;
    }
}


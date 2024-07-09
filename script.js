const display = document.getElementById('displayText');
const btnOp = document.querySelectorAll('.operador');
const btnNumeros = document.querySelectorAll('.numero')

let numeroDigitado = '';
let numeroAlmacenado = '';
let operadorValor = '';

function operacion(op, valor1,valor2){
  switch(op){
    case "+": return valor1 + valor2
    break;  
    
    case "-":  return valor1 - valor2
    break;

    case "/":  return valor1 / valor2
    break;

    case "x":  return valor1 * valor2
    break;

  }
}

function clear(){
  numeroDigitado = '';
  numeroAlmacenado = '';
  operadorValor = '';
  display.value = "0";
}

function negar(numeroSigno ){
  return numeroSigno * -1;
}

btnNumeros.forEach((boton)=>{
  boton.addEventListener('click', ()=>{
    numeroDigitado += boton.value;
    display.value = numeroDigitado;
  })
})


btnOp.forEach((operador)=>{
  operador.addEventListener('click',()=>{
        if(operador.value == '+'){
          if(numeroDigitado != 0){
            numeroAlmacenado = numeroDigitado;
            numeroDigitado = "";
            display.value = "";
            operadorValor= '+'
            return; 
           }
        }

        if(operador.value == '-'){
            if(numeroDigitado != 0){
              numeroAlmacenado = numeroDigitado;
              numeroDigitado = "";
              display.value = "";
              operadorValor= '-'
              return; 
             }
        }
        if(operador.value == 'x'){
              if(numeroDigitado != 0){
                numeroAlmacenado = numeroDigitado;
                numeroDigitado = "";
                display.value = "";
                operadorValor= 'x'
                return; 
               }
        }

        if(operador.value == '/'){
          if(numeroDigitado != 0){
                  numeroAlmacenado = numeroDigitado;
                  numeroDigitado = "";
                  display.value = "";
                  operadorValor= '/'
                  return; 
                 }
         }

        if(operador.value == '='){
          let valor1 =parseInt(numeroAlmacenado);
          let valor2 = parseInt(numeroDigitado);
          display.value = (operacion(operadorValor,valor1,valor2))
          numeroDigitado = parseInt(display.value)
        }

        if(operador.value == 'C'){
          clear();
          return;
        }

       
      }
  
    )
})
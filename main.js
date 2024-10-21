entrada = document.getElementById("numero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0

entrada.addEventListener("input", (evento)=>{
})

function numeroPrimo(n){
    let esPrimo = false
    let cuenta = 0
    if(n == 1){
        esPrimo = false
    } else{
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
               cuenta = cuenta + 1
            } 
        }
        if(cuenta == 0){
            esPrimo = true
        }else {
            esPrimo = false
        }
    }
    return esPrimo
}

btn.addEventListener("click", ()=>{
    resultado= numeroPrimo(numero)
    console.log(resultado)
    let hijo = document.createElement("h3")
    if(resultado){
        hijo.innerHTML = "Es primo"
    } else {
        hijo.innerHTML = "No es primo"
    }
    salida.appendChild(hijo)
})
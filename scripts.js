const formatter = new Intl.NumberFormat('en-CO',{
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

function capturaCalcular() {
    let valor = Number(document.querySelector("#inp1").value);
    let porcent = Number(document.getElementById("inp2").value);
    if(!isNaN(valor) && !isNaN(porcent)){
        multiplicacion = valor * (porcent /100)
        displayValor(valor);
        displayPorcent(multiplicacion);
        mostrar(multiplicacion + valor);
    }else(alert("Debe ingresar solo Numeros"))
}

function displayValor(valor){
    document.querySelector("#tCta").value = formatter.format(valor);
}
function displayPorcent(multiplicacion){
    document.querySelector("#prop").value = formatter.format(multiplicacion);
}
function mostrar(resultado) {
    document.querySelector("#result").value = formatter.format(resultado);
}

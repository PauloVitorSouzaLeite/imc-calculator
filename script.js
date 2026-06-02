let clicar = document.querySelector("#start")
let resultado = document.querySelector("#resultado")
clicar.addEventListener("click", informar)
function informar() {
    resultado.textContent = ""
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value 
    if (altura <= 0 || peso <= 0) {
        alert("Ocorreu um erro. Tente novamente")
    } else {
        let imc = Number(peso) / Number(altura * 2)
        let criar = document.createElement("div")
        if (imc <= 18.4) {criar.textContent = `O seu IMC é ${imc}. Abaixo do peso`} 
        else if (imc > 18.4 && imc < 25) {criar.textContent = `O seu IMC é ${imc}. Peso ideal`} 
        else if (imc >= 25 || imc < 30) {criar.textContent = `O seu IMC é ${imc}. Sobrepeso`} else if (imc > 30 || imc < 40) {criar.textContent = `O seu IMC é ${imc}. Obesidade grau 1`} 
        else {criar.textContent = `O seu IMC é ${imc}. Obesidade mórbida` }
        resultado.style.display = "flex"
        Cores(imc,resultado)
        resultado.appendChild(criar)
    }
}
function Cores(medida=0, caixa) {
    if (medida <= 18.4) {caixa.style.backgroundColor = "#464863"} 
    else if (medida > 18.4 && medida < 25) {caixa.style.backgroundColor = "#377c37"} 
    else if (medida >= 25) {caixa.style.backgroundColor = "#ffa550"} 
    else {caixa.style.backgroundColor = "#691717"}
}
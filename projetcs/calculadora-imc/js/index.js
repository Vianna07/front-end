const formulario = document.getElementById("form")
formulario.addEventListener("submit", function(e) {
    e.preventDefault()
    const inputWeight = e.target.querySelector("#peso")
    const weight = parseFloat(inputWeight.value)
    const inputHeigth = e.target.querySelector("#altura")
    const heigth = parseFloat(inputHeigth.value)
    const imc = calculaimc(weight, heigth);

    console.log(imc);
})


function calculaimc(peso, altura) {
    let imc = (peso / (altura ** 2))
    return imc.toFixed(2)
}
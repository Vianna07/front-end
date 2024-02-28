const formulario = document.getElementById("form")
formulario.addEventListener("submit", function(e) {
    e.preventDefault()
    const inputWeight = e.target.querySelector("#peso")
    const weight = parseFloat(inputWeight.value)
    const inputHeigth = e.target.querySelector("#altura")
    const heigth = parseFloat(inputHeigth.value)
    const imc = calculaImc(weight, heigth);
    const classificacao = tabelaImc(imc)

    console.log(`${classificacao} - imc: ${imc}`)
    mostrarResultado(imc, classificacao)
})

function calculaImc(peso, altura) {
    let imc = (peso / (altura ** 2))
    return imc.toFixed(2)
}

function tabelaImc(imc) {
    const classificacao = {
        1: "abaixo do peso",
        2: "peso normal",
        3: "sobrepeso",
        4: "obesidade grau I",
        5: "obesidade grau II",
        6: "obesidade grau III",
    }

    if (imc < 18.5) return classificacao[1]
    if (imc <= 24.9) return classificacao[2]
    if (imc <= 29.9) return classificacao[3]
    if (imc <= 34.9) return classificacao[4]
    if (imc <= 39.9) return classificacao[5]

    return classificacao[6]
}

function mostrarResultado(imc, classificacao) {
    const div = document.getElementById("result")
    const ul = document.getElementById("result-list")
    let espere = 0

    console.log(ul.textContent);
    console.log(!!ul.innerHTML);
    if (!!ul.innerHTML) {
        console.log("o");
        div.style.height = "0px"
        ul.innerHTML = ''
        espere = 500
    }

    setTimeout(() => {
        resultado = [
            `IMC: ${imc}`,
            `Classificação: ${classificacao}`
        ]
        
        
        for (const iterator of resultado) {
            const li = document.createElement("li")
            li.textContent = iterator
            
            ul.appendChild(li)
        }

        div.style.height = "100px"
    }, espere)


}
let images = []

function clicarImagem() {
    const imagensGaleria = document.querySelectorAll(".container img")

    for (const img of imagensGaleria) {
        img.addEventListener("click", function() {
            const imagemGrande = document.createElement('img')
            imagemGrande.src = this.src
            imagemGrande.classList.add = "imagem-grande"
            document.getElementById("imagem-grande-container").innerHTML = imagemGrande.outerHTML
        })
    }
}

function carregarImagem() {
    const galeria = document.getElementById("galeria")
    galeria.innerHTML = ''

    images.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl
        img.addEventListener("click", clicarImagem)
        galeria.appendChild(img)
    });
}

document.getElementById("arquivos")
.addEventListener('change', function(event) {
    const arquivo = event.target.files[0]
    const ler = new FileReader()
    ler.onload = function(e) {
        const imagemUrl = e.target.result
        images.push(imagemUrl)
        carregarImagem()
    } 

    ler.readAsDataURL(arquivo)
})



let images = []

function carregarImagem() {
    const galeria = document.getElementById("galeria")
    galeria.innerHTML = ''

    images.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl
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


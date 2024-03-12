let slideIndex = 0
const imagens  = document.getElementsByClassName('meu-slider')

carrosel()

for (const img of imagens) {
    img.addEventListener("click", carrosel.bind(true))
}


function carrosel(click=false) {
    for (const img of imagens) {
        img.style.display = "none"
    }

    imagens[slideIndex].style.display = "block"
    slideIndex = (slideIndex + 1)%3

    if (!click) {
        setTimeout(
            carrosel, 2000
        )

    }
}



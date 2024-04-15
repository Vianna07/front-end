async function getCharacters() {
    return await fetch('https://rickandmortyapi.com/api/character')
        .then((response => 
            response.json()
        ))
        .then(data => {
            localStorage.setItem('characters', JSON.stringify(data))
            return data
        }
    ).catch(error => {
        return JSON.parse(localStorage.getItem('characters'))
    })
}

function createCards(characters) {
    Array.from(characters.results).forEach(character => {
        console.log(character);
        const div = document.createElement('div')
        div.classList.add('card')

        const img = document.createElement('img')
        img.src = character.image

        

        div.appendChild(img)

        document.body.appendChild(div)
    });
}

async function App() {
    const characters = await getCharacters();
    
    createCards(characters)
}

App()
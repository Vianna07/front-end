const url = 'https://rickandmortyapi.com/api/character'
const container = document.querySelector('#container')
const card = document.querySelector('#card')


async function getCharacters() {
    return await fetch(url, {method: 'GET'})
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

function showData(characters) {
    characters.results.forEach(character => {        
        const p = document.createElement('p')
        p.id = character.id
        p.innerHTML = character.name
        p.addEventListener('click', () => {
            card.innerHTML = `<h3>${character.name}</h3>`
            card.innerHTML += `<img src="${character.image}" alt="img">`
            card.innerHTML += `<h5>Status: ${character.status}</h5>`
            card.innerHTML += `<h5>Espécie: ${character.especies}</h5>`
            card.innerHTML += `<h5>Origem: ${character.origin.name}</h5>`
        })
        container.appendChild(p)

        console.log(character);
    });
}

async function App() {
    const characters = await getCharacters();
    showData(characters)    
}

App()
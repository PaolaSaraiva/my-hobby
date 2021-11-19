const nameField = document.getElementById('name')
const ageField = document.getElementById('age')
const regionField = document.getElementById('region')
const photoImage = document.getElementById('photo')

const hobbyTitle = document.getElementById('title')
const hobbyDescription = document.getElementById('description')
const hobbyLinksList = document.getElementById('links')
const hobbyImagesList = document.getElementById('hobby-images')

nameField.innerText = 'Paola Saraiva'
ageField.innerText = '20 anos'
regionField.innerText = 'Rio Grande do Sul'
photoImage.setAttribute('src', './assets/images/my-photo.jpg')

hobbyTitle.innerText = 'RPG - Role Playing Game'
hobbyDescription.innerText = 'Role-playing game, também conhecido como RPG (em português: "jogo narrativo", "jogo de interpretação de papéis" ou "jogo de representação"), é um tipo de jogo em que os jogadores assumem papéis de personagens e criam narrativas colaborativamente. O progresso de um jogo se dá de acordo com um sistema de regras predeterminado, dentro das quais os jogadores podem improvisar livremente. As escolhas dos jogadores determinam a direção que o jogo irá tomar.'
hobbyLinksList.innerHTML = `
<li><a href="https://pt.wikipedia.org/wiki/Role-playing_game">Wikipedia</a></li>
<li><a href="https://jamboeditora.com.br/">Jambo Editora</a></li>
`
hobbyImagesList.innerHTML = `
<li>
    <img src="./assets/images/tabuleiro-rpg.jpg" />
</li>
<li>
    <img src="./assets/images/tormenta20.jpg" />
</li>
<li>
    <img src="./assets/images/tiranny-of-dragons.jpg" />
</li>
`
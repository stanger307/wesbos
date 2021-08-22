const div = document.createElement('div');

div.classList.add('wrapper');

document.body.appendChild(div);


const ul = `
    <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    </ul>
`;


const myFragment = document.createRange().createContextualFragment(ul);
div.appendChild(myFragment);

const ulElement = div.querySelector('ul');

const img = document.createElement('img');
img.src = "https://picsum.photos/500";

//fix position
img.width = 250;
img.height = 250;

img.classList.add('cute');
img.alt = "Cute Puppy!";

div.appendChild(img);

const myHTML = `
    <div class="myDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>    
`
// const myFragment2 = document.createRange().createContextualFragment(myHTML);
ulElement.insertAdjacentHTML("beforebegin", myHTML);

const myDiv = document.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete" type="button">&times Delete</button>
        </div>
    `;
    return html;
}

const cards = document.createElement("div");
cards.classList.add('cards');

let cardsHTML = generatePlayerCard("ace", 17, 169);
cardsHTML += generatePlayerCard("luffy", 13, 166);
cardsHTML += generatePlayerCard("nami", 14, 176);
cardsHTML += generatePlayerCard("usopp", 13, 179);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll(".delete");

const deleteCard = (e) => {
    const targetButton = e.currentTarget; // e.target
    // targetButton.parentElement.remove();
    targetButton.closest(".playerCard").remove();
}

buttons.forEach(button => button.addEventListener("click", deleteCard));

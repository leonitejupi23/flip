document.addEventListener('DOMContentLoaded',() => {


    const card = [
        {
            name: '1',
            img: 'flipimages/1.jpg'
        },
        {
            name: '1',
            img: 'flipimages/1.jpg'
        },
        {
            name: '2',
            img: 'flipimages/2.webp'
        },
        {
            name: '2',
            img: 'flipimages/2.webp'
        },
        {
            name: '3',
            img: 'flipimages/3.webp'
        },
        {
            name: '3',
            img: 'flipimages/3.webp'
        },
        {
            name: '5',
            img: 'flipimages/5.webp'
        },
        {
            name: '5',
            img: 'flipimages/5.webp'
        },
        {
            name: '6',
            img: 'flipimages/6.webp'
        },
        {
            name: '6',
            img: 'flipimages/6.webp'
        },
        {
            name: '8',
            img: 'flipimages/8.jpg'
        },
        {
            name: '8',
            img: 'flipimages/8.jpg'
        }
    ]

    card.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen =[];
    var cardsChosenId =[];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < card.length;i++) {
            var cardimg = document.createElement('img')
            cardimg.setAttribute('src', 'flipimages/blank.jpg')
            cardimg.setAttribute('data-id', i)
            cardimg.addEventListener('click', flipCard)
            grid.appendChild(cardimg)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optiononeId = cardsChosenId[0]
        const optiontwoId = cardsChosenId[1]
        if( cardsChosen[0] === cardsChosen[1]) {
            alert(' You found a match');
            cards[optiononeId].setAttribute('src','flipimages/white.png')
            cards[optiontwoId].setAttribute('src', 'flipimages/white.png')
            cardsWon.push(cardsChosen);
        } else {
            cards[optiononeId].setAttribute('src','flipimages/blank.jpg')
            cards[optiontwoId].setAttribute('src','flipimages/blank.jpg')
            alert('Sorry try again')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === card.length/2) {
            resultDisplay.textContent = 'Congrats! You found them all'
        }   
    }

    function flipCard() {
        var cardid = this.getAttribute('data-id')
        cardsChosen.push(card[cardid].name)
        cardsChosenId.push(cardid)
        this.setAttribute('src', card[cardid].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()
})
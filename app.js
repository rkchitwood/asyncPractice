const favNumber = 8;
const favNumbers = [8, 69, 8008];
let baseURL = "http://numbersapi.com";

//1
async function getFact(){
    let response = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(response);
}
getFact();
async function getFacts(){
    let response = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(response);
}
getFacts();
async function getFourFacts(){
    let response = await Promise.all(
        Array.from({ length: 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    response.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
getFourFacts();

//2
let partTwoBaseURL = 'https://deckofcardsapi.com/api/deck';
async function drawFromShuffled(){
    let response = await $.getJSON(`${partTwoBaseURL}/new/draw/`);
    let { suit, value } = response.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
}
drawFromShuffled();
async function drawTwo(){
    let firstResp = await $.getJSON(`${partTwoBaseURL}/new/draw/`);
    let deckId = firstResp.deck_id;
    let secondResp = await  $.getJSON(`${partTwoBaseURL}/${deckId}/draw/`);
    [firstResp, secondResp].forEach(card => {
        let { suit,value } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    })
}
drawTwo();
async function drawCards(){
    let $btn = $('button');
    let $cardArea = $('#card-area');
    let deckResp = await $.getJSON(`${partTwoBaseURL}/new/shuffle/`);
    $btn.show().on('click', async function() {
        let cardData = await $.getJSON(`${partTwoBaseURL}/${deckData.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
          $('<img>', {
            src: cardSrc,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
          })
        );
        if (cardData.remaining === 0) $btn.remove();
    });
}
    setup();

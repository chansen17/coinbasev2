require('bootstrap/dist/css/bootstrap.min.css');

let testContainer = document.querySelector('.test');
let buyBtn = document.querySelector('.buy-btn');
let amount;

buyBtn.addEventListener('click', () => {
    amount = window.prompt('how much crypto do you want to purchase?');

    console.log(`You purchased ${amount}`);
})
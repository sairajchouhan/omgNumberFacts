// general number facts
const gnfRandomBtn = document.querySelector('#generalNumberFacts .gnf-buttons .rand')
const gnfForm = document.querySelector('.gnf-buttons form')
const gnfDisplay = document.querySelector('#generalNumberFacts .display')
const gnfInput = document.querySelector('.gnf-buttons form input');

gnfForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const getInfo = async () => {
        let res = await fetch(`http://numbersapi.com/${gnfInput.value}`);
        let data = await res.text()
        return data;
    }
    getInfo()
        .then(data => {
            gnfDisplay.innerHTML = data;
        })
})

gnfRandomBtn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * 100);
    const getInfo = async () => {
        let res = await fetch(`http://numbersapi.com/${randomNum}`);
        let data = await res.text()
        return data;
    }
    getInfo()
        .then(data => {
            gnfDisplay.innerHTML = data;
        })
})

// mathematicalNumberFacts scrpit

const mnfRandomBtn = document.querySelector('#mathematicalNumberFacts .mnf-buttons .rand')
const mnfForm = document.querySelector('.mnf-buttons form')
const mnfDisplay = document.querySelector('#mathematicalNumberFacts .display')
const mnfInput = document.querySelector('.mnf-buttons form input');


mnfForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const getInfo = async () => {
        let res = await fetch(`http://numbersapi.com/${mnfInput.value}/math`);
        let data = await res.text()
        return data;
    }
    getInfo()
        .then(data => {
            mnfDisplay.innerHTML = data;
        })
})

mnfRandomBtn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * 1000);
    const getInfo = async () => {
        let res = await fetch(`http://numbersapi.com/${randomNum}/math`);
        let data = await res.text()
        return data;
    }
    getInfo()
        .then(data => {
            mnfDisplay.innerHTML = data;
        })
})

// yearFacts

const yfRandomBtn = document.querySelector('#yearFacts .yf-buttons .rand')
const yfForm = document.querySelector('.yf-buttons form')
const yfDisplay = document.querySelector('#yearFacts .display')
const yfInput = document.querySelector('.yf-buttons form input');


yfForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const getInfo = async () => {
        let res = await fetch(`http://numbersapi.com/${yfInput.value}/year`);
        let data = await res.text()
        return data;
    }
    getInfo()
        .then(data => {
            yfDisplay.innerHTML = data;
        })
})

yfRandomBtn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * 1000);
    const getInfo = async () => {
        let res = await fetch(`http://numbersapi.com/${randomNum}/year`);
        let data = await res.text()
        return data;
    }
    getInfo()
        .then(data => {
            yfDisplay.innerHTML = data;
        })
})
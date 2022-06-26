const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('note');
let notesArray = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];

localStorage.setItem('notes', JSON.stringify(notesArray));
const data = JSON.parse(localStorage.getItem('notes'));

const liMaker = text => {

    const li = document.createElement('li');
    li.textContent = text
    ul.appendChild(li)
};

form.addEventListener('submit', function(e) {
    e.preventDefault()

    notesArray.push(input.value);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    liMaker(input.value)
    input.value = ''
});

data.forEach(item => {
    liMaker(item)
});

button.addEventListener('click', function() {
    localStorage.clear()

    ul.innerHTML = "";

    notesArray = [];
});


function showName() {
    const name = prompt('Ваше имя?', );
    alert(`Привет ${name}!`);
}


const showName = (name = prompt('Ваше имя?', )) => alert(`Привет ${name}!`);
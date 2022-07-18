fetch('https://api.github.com/users/YanaRashetskaya')   .then(response   =>
console.log(response.json())) .catch(err => console.log(err));
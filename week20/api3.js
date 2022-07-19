
fetch('https://favqs.com/api/qotd')
.then(response => response.json())
.then (result => console.log(result))
.catch (err => console.log (err));


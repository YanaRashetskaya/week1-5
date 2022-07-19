function onSearch() {
    let gifs = document.getElementById("userSearch").value;
    fetch ("https://api.giphy.com/v1/gifs/search?=" + gifs + "api_key=8p84IMbCYWyXVOEb7NLq73KFKnw3Wjsp&q=&limit=5&offset=0&rating=g&lang=ru" )
    .then(response => response.json())
    .then (gifs => {
    document.getElementById('avatar').img = gifs.img ;
    })
    .catch (error => console.log (error));
}
document.addEventListener ("DOMContentLoaded", function 
(event) {
    onSearch();
});
function onSearch() {
    let gifs = document.getElementById("searchGifs").value;
    fetch ('https://api.giphy.com/v1/gifs/search?=' +gifs+ 'api_key=8p84IMbCYWyXVOEb7NLq73KFKnw3Wjsp&q=&limit=5&offset=0&rating=g&lang=ru')
    .then(response => response.json())
    .then (gifs => {
        console.log (gifs);
    })
    .catch (error => console.log (error));
} 
//document.getElementById('gif').innerHTML = gifs;
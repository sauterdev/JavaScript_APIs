console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.getElementById(`submitSearch`);
const searchInput = document.getElementById(`searchWord`);
const imageElement = document.getElementsByTagName(`img`);
const feedBackPara = document.getElementById(`feedBack`);

searchButton.addEventListener(`click`, getImages);

function getImages() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=oiA5a6Z8msUMvCOoZwNxcN5Otb6Pj4vy&s=${searchInput.value}`)
.then((res) => res.json())
.then((giphyObj) => {
    imageElement[0].src = giphyObj.data.images.original.url
    searchInput.value = ``;
})
.catch((err) => {
    feedBackPara.textContent = err.message
});
}


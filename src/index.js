// console.log('%c HI', 'color: firebrick')

let breedNames = [];
let userLetter = 'a';

document.addEventListener('DOMContentLoaded', () => {
   fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(json => {
        document.getElementById("imageTag").src = json.message;
    })

    document.getElementById("breed-dropdown").onchange = (event) => {
        // getting the user selected letter value
        userLetter = event.target.value;
        setBreedsOnPage();
    }
})


fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        // object destructuring
        const { message } = json;

        // get keys from object ['affenpincher', 'boxer', ...]
        breedNames = Object.keys(message);
 

    })

const setBreedsOnPage = () => {
    // filter out all breeds that don't have userLetter as the first character and map to return the name in a list item
    const filteredBreedNames = breedNames.filter((val) => val.charAt(0) === userLetter).map((name) => `<li>${name}</li>`);
    // get the list
    const list = document.querySelector("ul");
    // replace innerHtml with filtered breednames
    list.innerHTML = filteredBreedNames.join(' ');
}

function changeColor() {
    document.querySelector('li').addEventListener(`click`, e)
    console.log(e);
}
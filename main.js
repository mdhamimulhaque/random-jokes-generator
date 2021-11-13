const jokesText = document.querySelector("p");
const button = document.querySelector(".footer");

document.addEventListener("DOMContentLoaded", getJokes);
button.addEventListener("click", getJokes);

async function getJokes() {
    try {
        const jokesApi = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        });
        const jokesObject = await jokesApi.json();
        jokesText.innerHTML = `"${jokesObject.joke}"`;
    } catch (err) {
        console.log(err)
    }
}


 
let baseURL = "https://flatter-cuties-back-end.vercel.app/characters";

document.addEventListener("DOMContentLoaded", () => {
    const characterBar = document.getElementById("character-bar");
    const name = document.getElementById("name");
    const image = document.getElementById("image");
    const voteCount = document.getElementById("vote-count");
    const form = document.getElementById("votes-form");
    const resetBtn = document.getElementById("reset-btn");

    fetch(`${baseURL}`)
    .then(response => response.json())
    .then(characters => { 
        characters.forEach(character => { 
            const span = document.createElement("span");
            span.textContent = character.name;
            characterBar.appendChild(span);

    
                
                span.onclick = () => {
                    name.textContent = character.name;
                    image.src = character.image;
                    image.alt = character.name;
                    voteCount.textContent = character.votes;
                    
                };
            });
        })
        .catch(err => console.log(err));

    
        let voteData = { count: 0 };

form.onsubmit = (e) => {
    e.preventDefault();
    voteData.count += Number(document.getElementById("votes").value);
    voteCount.textContent = voteData.count;
    form.reset();
};

resetBtn.onclick = () => {
    voteData.count = 0;
    voteCount.textContent = voteData.count;
};

            
});


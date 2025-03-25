 
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

    
    form.onsubmit = (e) => {
        e.preventDefault();
        let votes = document.getElementById("votes").value;
        if (votes) {
            voteCount.textContent = Number(voteCount.textContent) + Number(votes);
        }
        form.reset();
    };

   
    resetBtn.onclick = () => voteCount.textContent = 0;
});


const listE1 = document.getElementById("score-category");
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(post => {
            // icon | category | Score
            listE1.insertAdjacentHTML ('beforeend', 
                `<div class="category"><img src="${post.icon}" class="icon" alt="icon"></img> <p class="category-name">${post.category}</p><p class="score"><strong>${post.score}</strong> / 100 </p></div>`
            );
        });
    })
    .catch((error) => console.error("error loading json file", error));
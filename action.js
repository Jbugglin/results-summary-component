const listE1 = document.getElementById("score-category");
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(post => {
            // icon | category | Score
            listE1.insertAdjacentHTML ('beforeend', 
                `<div class="category" id="${post.category}">
                    <div class="left-side">
                        <img src="${post.icon}" class="icon" alt="icon"></img> 
                        <p class="category-name">${post.category}</p>
                    </div>
                    <div class="right-side">
                        <p class="score"><strong>${post.score}</strong> / 100 </p>
                    </div>
                </div>`
            );
        });
    })
    .catch((error) => console.error("error loading json file", error));
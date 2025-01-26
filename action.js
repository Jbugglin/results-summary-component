const listE1 = document.getElementById("resultSection");
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(post => {
            // icon | category | Score
            listE1.insertAdjacentHTML('beforeend', `<img src="${post.icon}" class="icon" alt="icon"></img>` + `<p class="category">${post.category}</p>` + `<p class="score">${post.score}/100 </p>`);
        });
    })
    .catch((error) => console.error("error loading json file", error));
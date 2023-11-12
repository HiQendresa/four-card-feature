
// Fetch the JSON file
function fetchData() {
    return fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Check if data is an array
        if (Array.isArray(data)) {
            return data;
        } else {
        console.error('The fetched data is not an array.');
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));

}

fetchData()
  .then(items => {
    items.map((item, index) =>  {
        const card = `
            <div class="card card${index}" style="border-top: 4px solid ${item.color}">
                <div class="title">${item.title}</div>
                <div class="description">${item.description}</div>
                <div class="image">
                    <img src="${item.image}" alt="${item.title} image">
                </div>
            </div>`;

        
                if (index === 0 || index === 3) {
                    return document.querySelector('.card_container').insertAdjacentHTML('beforeend', card);
                  } else {
                    // Wrap both cards in a single container
                    return document.querySelector('.card_container .main-content').insertAdjacentHTML('beforeend', card);
                  }
        });
    });


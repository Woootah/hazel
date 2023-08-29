const testimonies = document.querySelector("#testimonies");

fetch("testimonies.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const html = `
        <div class="review-card">
          <img src="./icons/quote.png" alt="quote" class="review-quote">
          <div class="review-body">
              <div class="review-img-container">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="review-text">
                <h2>${item.name}</h2>
                <p><q>${item.comment}</q></p>
              </div>
            </div>
        </div>`;

      testimonies.innerHTML += html;
    });
  })
  .catch(err => {
    console.log("Error fetching data: " + err);
  });

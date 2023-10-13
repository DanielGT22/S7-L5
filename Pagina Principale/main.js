const renderEvents = function (arrayOfEvents) {
  const row = document.getElementById("events-row");
  arrayOfEvents.forEach((event) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-3");
    newCol.innerHTML = `
    <div class="card">
        <img src=${event.imageUrl} class="card-img-top" alt="generic concert picture">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="card-text">${event.brand}</p>
            Prezzo: ${event.price}€</p>
          
            <a href="./detail.html?eventId=${event._id}" class="btn btn-primary">DETTAGLI</a>
        </div>
    </div>
    `;
    row.appendChild(newCol);
  });
};

const getEvents = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5NDQyYWU5ZTExZTAwMThlZGEyMDAiLCJpYXQiOjE2OTcyMDMyNjQsImV4cCI6MTY5ODQxMjg2NH0.SvJ23KXMImKWJdgvIWyqgAeubmxw5k6v40DH0VxkSGs",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((events) => {
      console.log("EVENTS", events);
      renderEvents(events);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};

getEvents();

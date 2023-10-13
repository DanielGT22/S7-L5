const formReference = document.getElementById("form");
formReference.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("invio i dati all'API");

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const brandInput = document.getElementById("brand");
  const imgInput = document.getElementById("imageUrl");

  const newEvent = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    brand: brandInput.value,
    imageUrl: imgInput.value,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5NDQyYWU5ZTExZTAwMThlZGEyMDAiLCJpYXQiOjE2OTcyMDMyNjQsImV4cCI6MTY5ODQxMjg2NH0.SvJ23KXMImKWJdgvIWyqgAeubmxw5k6v40DH0VxkSGs",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
const deleteAll = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI5NDQyYWU5ZTExZTAwMThlZGEyMDAiLCJpYXQiOjE2OTcyMDMyNjQsImV4cCI6MTY5ODQxMjg2NH0.SvJ23KXMImKWJdgvIWyqgAeubmxw5k6v40DH0VxkSGs",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("All objects deleted.");
      } else {
        throw new Error("Failed to delete.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

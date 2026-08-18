console.log("Ganbei is working!");

const openModalBtn = document.getElementById('openModalBtn');
const reservationForm = document.querySelector(".reservation-modal");
const closeButton = document.querySelector(".close-btn");
const form = document.querySelector("#reservation-form");

openModalBtn.addEventListener("click", function(event) {
    event.preventDefault();
    reservationForm.classList.add("active");
})

closeButton.addEventListener("click", function() {
    reservationForm.classList.remove("active");
})
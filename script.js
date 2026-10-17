console.log("Ganbei is working!");

const openModalBtn = document.getElementById('openModalBtn');
const reservationForm = document.querySelector(".reservation-modal");
const closeButton = document.querySelector(".close-btn");
const thankyouModal = document.querySelector(".thank-you-modal");
const thankyouCloseButton = document.querySelector(".thank-you-modal .close-btn");

openModalBtn.addEventListener("click", function(event) {
    event.preventDefault();
    reservationForm.classList.add("active");
})

closeButton.addEventListener("click", function() {
    reservationForm.classList.remove("active");
})

thankyouCloseButton.addEventListener("click", function() {
    thankyouModal.classList.remove("active");
})

document.getElementById("reservation-form")
.addEventListener("submit", function(event) {
    event.preventDefault();
    reservationForm.classList.remove("active");
    thankyouModal.classList.add("active");
})

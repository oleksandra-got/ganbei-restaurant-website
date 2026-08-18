console.log("Ganbei is working!");

const openModalBtn = document.getElementById('openModalBtn');
const reservationForm = document.querySelector(".reservation-modal");
const closeButton = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function(event) {
    event.preventDefault();
    reservationForm.classList.add("active");
})

closeButton.addEventListener("click", function() {
    reservationForm.classList.remove("active");
})

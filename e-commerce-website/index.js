const str = document.querySelector('.btn');
const log = document.querySelector('.line');
const login = document.querySelector('.login');

str.addEventListener("click", () => {
    str.classList.toggle('active');
});

log.addEventListener("click", () => {
    log.classList.toggle('active');
});

login.addEventListener("click", () => {
    login.classList.toggle('active');
});
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
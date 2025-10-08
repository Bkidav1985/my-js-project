const logo = document.getElementById("myImg");
const imageModal = document.getElementById("imageModal");
const close = document.getElementById("close");
const img = document.getElementById("img");
const description = document.getElementById("description");

logo.addEventListener('click', function(){
    imageModal.style.display="block";
    description.innerHTML="Our Services";
    img.src="images/mypix.png";
});

close.addEventListener('click', () => {
    imageModal.style.display="none";
})


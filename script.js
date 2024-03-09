
document.addEventListener("DOMContentLoaded", function() {
    // Your existing JavaScript code here
    let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 4000); // Change slide every 2 seconds (adjust as needed)
}
  });
  
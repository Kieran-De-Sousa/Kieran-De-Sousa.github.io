var slideIndex = 1;
showSlides(slideIndex);

// Next/previous image controls
function changeImage(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentImage(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "inline-block";
  slides[slideIndex-1].style.position = "relative";

  dots[slideIndex-1].className += " active";
}
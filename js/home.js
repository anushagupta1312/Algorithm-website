/* js for navbar */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const quote = document.getElementById("quotepara");

// starting of web
fetch('https://api.quotable.io/random?maxLength=50')
.then(response => response.json())
.then(data => {
  quote.innerHTML = `"${data.content} —${data.author}"` })
  // for-loop
setInterval(() => {
  fetch('https://api.quotable.io/random?maxLength=50')
  .then(response => response.json())
  .then(data => {
    quote.innerHTML = `"${data.content} —${data.author}"`
  })
  },60*1000*60);


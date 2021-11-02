/* js for navbar */
function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("box1");
    if (x.className === "topnav") {
      x.className += " responsive";
    }
   
    else {
      x.className = "topnav";
    }
  }


/* algorithm page js */
setInterval(() => {
    let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    const c=new Date();
    const m=monthNames[c.getMonth()];
    const d=c.getDate();
    document.getElementById('date').innerHTML=`${m} ${d}`
  }, 1000);
  // starting of web quote
  fetch('https://api.quotable.io/random?maxLength=50')
  .then(response => response.json())
  .then(data => {
  quote1.innerHTML = `"${data.content} —${data.author}"` })
  // for-loop
  setInterval(() => {
  fetch('https://api.quotable.io/random?maxLength=50')
  .then(response => response.json())
  .then(data => {
    quote1.innerHTML = `"${data.content}"" —${data.author}`
  })
  },60*1000*60);

  
  mybutton = document.getElementById("scrollTopBtn");
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  function getBackToBeginning() { window.scrollTo(0, 0);
  }
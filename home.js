
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

setInterval(() => {
  let n = Math.floor((Math.random() * 50) + 1);
  switch(n) {
    case 1:
     quote.innerHTML = "Education is the movement from darkness to light. - Allan Bloom";
    break;
    case 2:
     quote.innerHTML = "Be yourself; everyone else is already taken." 
    break;
    case 3:
      quote.innerHTML = "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    break;
    case 4:
      quote.innerHTML = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    break;
    case 5:
      quote.innerHTML = "So many books, so little time.";
    break;
    case 6:
      quote.innerHTML = "A room without books is like a body without a soul.";
    break;
    case 7:
      quote.innerHTML = "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind";
    break;
    case 8:
      quote.innerHTML = "You know you're in love when you can't fall asleep because reality is finally better than your dreams.";
    break;
    case 9:
      quote.innerHTML = "You only live once, but if you do it right, once is enough";
    break;
    case 10:
      quote.innerHTML = "Be the change that you wish to see in the world.";
    break;
    case 11:
      quote.innerHTML = "In three words I can sum up everything I've learned about life: it goes on.";
    break;
    case 12:
      quote.innerHTML = "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.";
    break;
    case 13:
      quote.innerHTML = "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend";
    break;
    case 14:
      quote.innerHTML = "If you tell the truth, you don't have to remember anything.";
    break;
    case 15:
      quote.innerHTML = "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . ";
    break;
    case 16:
      quote.innerHTML = "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel";
    break;
    case 17:
      quote.innerHTML = "A friend is someone who knows all about you and still loves you.";
    break;
    case 18:
      quote.innerHTML = "Always forgive your enemies; nothing annoys them so much.";
    break;
    case 19:
      quote.innerHTML = "To live is the rarest thing in the world. Most people exist, that is all.";
    break;
    case 20:
      quote.innerHTML = "Live as if you were to die tomorrow. Learn as if you were to live forever";
    break;
    case 21:
      quote.innerHTML = "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that";
    break;
    case 22:
      quote.innerHTML = "Without music, life would be a mistake.";
    break;
    case 23:
      quote.innerHTML = "We accept the love we think we deserve.";
    break;
    case 24:
      quote.innerHTML = "I am so clever that sometimes I don't understand a single word of what I am saying";
    break;
    case 25:
      quote.innerHTML = "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.";
    break;
    case 26:
      quote.innerHTML = "The best preparation for tomorrow is doing your best today";
    break;
    case 27:
      quote.innerHTML = "Live as if you were to die tomorrow. Learn as if you were to live forever.";
    break;
    case 28:
      quote.innerHTML = "That which does not kill us makes us stronger.";
    break;
    case 29:
      quote.innerHTML = "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.";
    break;
    case 30:
      quote.innerHTML = "We must not allow other people’s limited perceptions to define us.";
    break;
    case 31:
      quote.innerHTML = "Do what you can, with what you have, where you are.";
    break;
    case 32:
      quote.innerHTML = "Be yourself; everyone else is already taken.";
    break;
    case 33:
      quote.innerHTML = "This above all: to thine own self be true";
    break;
    case 34:
      quote.innerHTML = "If you cannot do great things, do small things in a great way";
    break;
    case 35:
      quote.innerHTML = "If opportunity doesn’t knock, build a door.";
    break;
    case 36:
      quote.innerHTML = "Wise men speak because they have something to say; fools because they have to say something.";
    break;
    case 37:
      quote.innerHTML = "Strive not to be a success, but rather to be of value.";
    break;
    case 38:
      quote.innerHTML = "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference";
    break;
    case 39:
      quote.innerHTML = "Do not let what you cannot do interfere with what you can do.";
    break;
    case 40:
      quote.innerHTML = "Whenever you find yourself on the side of the majority, it is time to pause and reflect";
    break;
    case 41:
      quote.innerHTML = "I haven’t failed. I’ve just found 10,000 ways that won’t work.";
    break;
    case 42:
      quote.innerHTML = "A journey of a thousand leagues begins beneath one’s feet.";
    break;
    case 43:
      quote.innerHTML = "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.";
    break;
    case 44:
      quote.innerHTML = "Either you run the day, or the day runs you.";
    break;
    case 45:
      quote.innerHTML = "Life shrinks or expands in proportion to one’s courage.";
    break;
    case 46:
      quote.innerHTML = "You must be the change you wish to see in the world.";
    break;
    case 47:
      quote.innerHTML = "What you do speaks so loudly that I cannot hear what you say.";
    break;
    case 48:
      quote.innerHTML = "Believe and act as if it were impossible to fail.";
    break;
    case 49:
      quote.innerHTML = "The difference between ordinary and extraordinary is that little extra.";
    break;
    case 50:
      quote.innerHTML = "The best way to predict the future is to invent it.";
    break;

    default:
      quote.innerHTML = "can't be generated";
    }
  }, 86400000);

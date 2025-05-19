const words = [" Back-end Developer.", " Software Developer.", "Tech Enthusiast."];
let wordIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");
let typingSpeed = 100;
let deletingSpeed = 60;
let delayBetweenWords = 1500;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, deletingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});

//contact form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Optionally, collect form data
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const subject = document.getElementById('subject').value;
    // const message = document.getElementById('message').value;

    // Show a success message
    form.innerHTML = `
      <div class="alert alert-success text-center" role="alert">
        Thank you for reaching out! Your message has been sent.
      </div>
    `;
  });
});


// Mobile Menu Toggle
const menuToggler = document.querySelector(".menu-toggler");
const mobileMenu = document.querySelector(".header-nav");
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");

menuToggler.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuIcon.classList.toggle("none");
  closeIcon.classList.toggle("active");
});

// Mobile Drop Down (What You'll Learn)
const unfoldLearn1 = document.querySelector(".unfold-1");
const learnText1 = document.querySelector(".unfold-text-1");

unfoldLearn1.addEventListener("click", () => {
  learnText1.classList.toggle("active");
});

const unfoldLearn2 = document.querySelector(".unfold-2");
const learnText2 = document.querySelector(".unfold-text-2");

unfoldLearn2.addEventListener("click", () => {
  learnText2.classList.toggle("active");
});

const unfoldLearn3 = document.querySelector(".unfold-3");
const learnText3 = document.querySelector(".unfold-text-3");

unfoldLearn3.addEventListener("click", () => {
  learnText3.classList.toggle("active");
});

const unfoldLearn4 = document.querySelector(".unfold-4");
const learnText4 = document.querySelector(".unfold-text-4");

unfoldLearn4.addEventListener("click", () => {
  learnText4.classList.toggle("active");
});

const unfoldLearn5 = document.querySelector(".unfold-5");
const learnText5 = document.querySelector(".unfold-text-5");

unfoldLearn5.addEventListener("click", () => {
  learnText5.classList.toggle("active");
});

const unfoldLearn6 = document.querySelector(".unfold-6");
const learnText6 = document.querySelector(".unfold-text-6");

unfoldLearn6.addEventListener("click", () => {
  learnText6.classList.toggle("active");
});

const unfoldLearn7 = document.querySelector(".unfold-7");
const learnText7 = document.querySelector(".unfold-text-7");
const lastDropContainer = document.querySelector(".last-drop-down-container");

unfoldLearn7.addEventListener("click", () => {
  learnText7.classList.toggle("active");
  lastDropContainer.classList.toggle("mb-1");
});

// Reviews Carousel
const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

// Function to update carousel position and dots
function updateCarousel() {
  const totalCards = document.querySelectorAll(".review-card").length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add("active");
  }
}

// Add swipe support
let startX = 0;
let isSwiping = false;

carousel.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].screenX;
  isSwiping = true; // Enable swiping
});

carousel.addEventListener("touchmove", (e) => {
  if (!isSwiping) return; // Only track swipe if the swipe has started

  // Prevent default to stop scrolling on mobile
  e.preventDefault();
});

carousel.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].screenX;
  if (startX > endX + 50) {
    nextCard();
  } else if (startX < endX - 50) {
    prevCard();
  }
  // Reset swipe state
  isSwiping = false;
});

// Navigate to the next card
function nextCard() {
  const totalCards = document.querySelectorAll(".review-card").length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

// Navigate to the previous card
function prevCard() {
  const totalCards = document.querySelectorAll(".review-card").length;
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1;
  }
  updateCarousel();
}

// Event listeners for dots
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.getAttribute("data-index"));
    updateCarousel();
  });
});

// Initialize the carousel
updateCarousel();

// Select elements
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");
const menuToggleIcon = document.getElementById("menu-toggle-icon");

// Toggle Mobile Menu
menuIcon.addEventListener("click", () => {
  // Toggle 'active' class for navList
  navList.classList.toggle("active");

  // Add rotate animation to menu icon
  menuIcon.classList.toggle("animate");

  // Animate Icon: Switch Between Menu and Cross
  if (navList.classList.contains("active")) {
    menuToggleIcon.classList.replace("bx-menu", "bx-x");
  } else {
    menuToggleIcon.classList.replace("bx-x", "bx-menu");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setTimeout(() => {
            entry.target.classList.add("appear");
          }, index * 300); // Delay appearance based on the index
        }
      });
    },
    { threshold: 0.2 }
  );

  features.forEach((feature) => {
    observer.observe(feature);
  });
});


//what we offer section///////

document.addEventListener("DOMContentLoaded", () => {
  const offerSection = document.querySelector(".offer-container");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          offerSection.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(offerSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".funding-content");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          content.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(content);
});


//approval; section///////////
document.addEventListener("DOMContentLoaded", () => {
  const approvalSection = document.querySelector(".approval-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          approvalSection.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(approvalSection);
});







//qoute section///////////////
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".testimonial-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
          observer.unobserve(section); // Stop observing after animation triggers
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );

  observer.observe(section);
});
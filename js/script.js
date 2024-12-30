document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarLinks = document.querySelector(".navbar-links");
  const indexz = document.querySelector(".legal-support-container-fluid");
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("show");
    indexz.classList.toggle("indexboom");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("back-button1");
    const nextButton = document.getElementById("next-button1");
    const supportBoxes = document.querySelectorAll(".branch-support-box");

    // Only run if the elements exist
    if (backButton && nextButton && supportBoxes.length > 0) {
      // Function to update button states
      function updateButtonState() {
        const hasSelected =
          document.querySelector(".branch-support-box.selected") !== null;

        if (hasSelected) {
          backButton.classList.remove("disabled");
          nextButton.classList.remove("disabled");
        } else {
          backButton.classList.add("disabled");
          nextButton.classList.add("disabled");
        }
      }

      supportBoxes.forEach((box) => {
        box.addEventListener("click", () => {
          supportBoxes.forEach((b) => b.classList.remove("selected"));
          box.classList.add("selected");
          updateButtonState();
        });
      });

      // Initial state
      updateButtonState();
    }
  });

  // Modal management
  const infoIcons = document.querySelectorAll(".info-icon");
  const modals = document.querySelectorAll(".modal");

  infoIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const modalId = icon.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  modals.forEach((modal) => {
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // Flatpickr initialization
  flatpickr("#deadline", {
    altInput: true,
    altFormat: "d M Y",
    dateFormat: "Y-m-d",
    disableMobile: true,
    locale: "ar", // Arabic localization
  });

  const icon = document.querySelector(".deadline-icon");
  const input = document.querySelector("#deadline");
  if (icon) {
    icon.addEventListener("click", () => {
      input._flatpickr.open();
    });
  }
});

// FAQ toggle
function toggleFaq(element) {
  const faqItem = element.closest(".faq-item");
  faqItem.classList.toggle("active");
}

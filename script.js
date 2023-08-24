document.addEventListener("DOMContentLoaded", function() {
    const navbarButton = document.querySelector(".navbar-toggler");
    const typedElements = document.querySelectorAll(".typed");
    const socialsElements = document.querySelectorAll(".socials");
    let colorChanged = false; // Keep track of color state
  
    function changeColor() {
      if (!colorChanged) {
        typedElements.forEach(function(element) {
          element.style.color = "rgb(25,25,25)";
        });
  
        socialsElements.forEach(function(element) {
          element.style.color = "rgb(25,25,25)";
        });
  
        colorChanged = true;
      } else {
        typedElements.forEach(function(element) {
          element.style.color = ""; // Reset to default color
        });
  
        socialsElements.forEach(function(element) {
          element.style.color = "rgb(48,49,52)"; // Reset to default color
        });
  
        colorChanged = false;
      }
    }
  
    navbarButton.addEventListener("click", changeColor);
  });
  
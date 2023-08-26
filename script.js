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
  
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap ";
        document.body.appendChild(css);
    };

    function onSubmit(token) {
      document.getElementById("submit").submit();
  } 
  
  
  });
  
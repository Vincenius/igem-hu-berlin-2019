(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.is-revealing', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })
  }

  var headerLinks = document.querySelectorAll('.scroll-link', 0);
  addScrollListener(headerLinks)

  if (document.getElementById("cells-bg") !== null) {
    VANTA.CELLS({
      el: "#cells-bg",
      color1: 0x9898,
      color2: 0xfff333
    })
  }
}())

function addScrollListener(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
      e.preventDefault()

      var id = this.getAttribute('data-link');
      var target = document.getElementById(id)
      animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 300, true);
    }, false);
  }
}

function animate(elem, style, unit, from, to, time, prop) {
  if (!elem) {
      return;
  }
  var start = new Date().getTime(),
      timer = setInterval(function () {
          var step = Math.min(1, (new Date().getTime() - start) / time);
          if (prop) {
              elem[style] = (from + step * (to - from))+unit;
          } else {
              elem.style[style] = (from + step * (to - from))+unit;
          }
          if (step === 1) {
              clearInterval(timer);
          }
      }, 25);
  if (prop) {
        elem[style] = from+unit;
  } else {
        elem.style[style] = from+unit;
  }
}
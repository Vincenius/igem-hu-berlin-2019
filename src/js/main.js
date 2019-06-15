(function () {
  const noJs = document.querySelector('.no-js')
  if (noJs) {
    noJs.classList.add('js')
    noJs.classList.remove('no-js')
  }
}())

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll('.is-revealing');
  [].forEach.call(elements, function(el) {
    if (isElementVisible(el)) {
      el.classList.add('is-revealing-visible')
    }
  });
});

function isElementVisible(el) {
  var rect     = el.getBoundingClientRect(),
      vWidth   = window.innerWidth || doc.documentElement.clientWidth,
      vHeight  = window.innerHeight || doc.documentElement.clientHeight,
      efp      = function (x, y) { return document.elementFromPoint(x, y) };     

  // Return false if it's not in the viewport
  if (rect.right < 0 || rect.bottom < 0 
          || rect.left > vWidth || rect.top > vHeight)
      return false;

  // Return true if any of its four corners are visible
  return (
        el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
  );
}

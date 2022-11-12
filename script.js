const Trail = document.querySelector('#Trail');

window.onmousemove= e => {
  const y = e.clientY - Trail.offsetWidth /2;
  const x = e.clientX - Trail.offsetHeight /2;
   const keyframes = {
 transform : `translate(${x}px, ${y}px)`
};
Trail.animate(keyframes,{
  duration: 800,
  fill: "forwards"
});
}
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

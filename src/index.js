import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();

var typed = new Typed('.typed', {
  strings: ["multidisciplinar.", "web developer.", "futurist.", "vegan."],
  typeSpeed: 100,
  loop: true,
  startDelay: 1100,
  showCursor: false,
  contentType: null
});
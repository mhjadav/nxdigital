var loadScript = require('simple-load-script');

//CSS files
import '../static/css/font-awesome.min.css';
import '../static/css/animate.css';
import '../static/css/icofonts.css';
import '../static/css/bootstrap.min.css';
import '../static/css/owlcarousel.min.css'
import '../static/css/magnific-popup.css';
import '../static/css/style.css';
import '../static/css/responsive.css'

loadScript('/js/jquery.js');

import("jquery").then(($) => {
  loadScript('/js/popper.js');
  loadScript('/js/bootstrap.js');
  loadScript('/js/owl-carousel.js');
  loadScript("/js/jquery.counterup.min.js");
  loadScript("/js/jquery.magnific.popup.js");
  loadScript("/js/wow.min.js");
  loadScript("/js/smoothscroll.js");
  loadScript("/js/main.js");
}, (err) => {
    console.log(err);
});
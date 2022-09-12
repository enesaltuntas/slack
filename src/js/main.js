// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

// Your app code
console.log(`Hello ${process.env.HELLO}`);

$('#clients_slider').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
      nav:false
    },
    600:{
      items:3,
      nav:false
    },
    1000:{
      items:6,
      nav:true,
      loop:false
    }
  }
});

$('#pricing_slider').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:false
    },
    600:{
      items:2,
      nav:false
    },
    1000:{
      items:3,
      nav:true,
      loop:false
    }
  }
});

$("#testimonial_slider").owlCarousel({
  navigation : true, // Show next and prev buttons
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem: true,
  items : 1,
  nav : true,
  dots: true,
  autoplayTimeout: 4000,
  autoplay: false,
  loop: true,
  navText: ['', '<img src="/images/next_icon.svg">']
});

"use strict";
$( document ).ready(function() {
  console.log( "Welcome From Coder618" );
  skill_animation = true;
  itteration = 1;
  greetings_arr = [
    'Bonjour',
    'Hola',
    'مرحبا',
    '你好',
    'こんにちは',
    'cześć',
    'Hello'
  ];


  function change_banner_height(){
    var windowHeight = $(window).outerHeight();
    $(".banner").css( "min-height", windowHeight );
  }

  change_banner_height();
  $(window).on("orientationchange",function(){
    change_banner_height();
  });
  
  
particlesJS("animated-banner", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0,
      "random": false
    },
    "size": {
      "value": 2,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 2,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      }
    }
  },
  "retina_detect": true
});


  /* 

  particlesJS.load('animated-banner', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/particles.json', function() {
  console.log('callback - particles.js config loaded');
  });   


  particlesJS("animated-banner", {
      "particles": {
        "number": {
          "value": 10,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 4
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  }); // Particle js


  */
  function change_greetings(){      
    setInterval( function (   ) {
      $(".gretting").html( "<span>" + greetings_arr[itteration] + "</span>" );
      ( itteration == (greetings_arr.length - 1) ) ? itteration = 0 : itteration++ ;        
    }, 2500 );
  }
  change_greetings();


  function do_skill_animation(){
    $('.skill-each-item').each(function(){
      $(this).find('.skill-status').animate({
        width:$(this).attr('data-percent')
      },2000);
    });
    skill_animation = false;
  }

  $( document ).on('scroll', function(){
    var current_position =  $(this).scrollTop();

    if(  current_position > 1000 && skill_animation ) {
      do_skill_animation();
    }

  });

  //Scroll
  $(".scroll-down-btn").on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

});// Document ready

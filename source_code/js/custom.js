"use strict";
$( document ).ready(function() {
    console.log( "ready!" );
    // particlesJS("animated-banner", {"particles":{"number":{"value":40,"density":{"enable":false,"value_area":800}},"color":{"value":"#f20000"},"shape":{"type":"edge","stroke":{"width":0,"color":"#ff0000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":1.5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);

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

  $("#send-contact-request").on("click", function(e){
    e.preventDefault();

    console.log("clicked received");
    $.ajax({      
      url: 'http://18.217.18.199:3000', 
      type: "POST",
      dataType: 'json',
      data: {
        name: "alim",
        email : "no@yaloo.com",
        mesg: "fake mesg fu"
      },
      
      error: function(jqXhr, textStatus, errorMessage){
        console.log(jqXhr);
        console.log(textStatus);
        console.log(errorMessage);
      },
      success: function(result){
        console.log(result);
      }
    });
    

    console.log("ran");
    


    


  });





      





  

    var bar = new ProgressBar.Line(skill_html, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    var bar2 = new ProgressBar.Line(skill_css, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    var bar3 = new ProgressBar.Line(skill_javascript, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    var bar4 = new ProgressBar.Line(skill_php, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    var bar5 = new ProgressBar.Line(skill_wordpress, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    var bar6 = new ProgressBar.Line(skill_laravel, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    var bar7 = new ProgressBar.Line(skill_codeigniter, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    var bar8 = new ProgressBar.Line(skill_jumla, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#5d2c69',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '88%', height: '100%'},
      text: {
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          
        },
        autoStyleContainer: false
      },
      from: {color: '#5d2c69'},
      to: {color: '#5d2c69'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    
    bar.animate(0.95);  // Number from 0.0 to 1.0
    bar2.animate(0.80);  // Number from 0.0 to 1.0
    bar3.animate(0.65);  // Number from 0.0 to 1.0
    bar4.animate(0.7);  // Number from 0.0 to 1.0

    bar5.animate(0.8);  // Number from 0.0 to 1.0
    bar6.animate(0.49);  // Number from 0.0 to 1.0
    bar7.animate(0.55);  // Number from 0.0 to 1.0
    bar8.animate(0.30);  // Number from 0.0 to 1.0
    


     function change_text(){
      var parent = $(".gretting ul");
      var value = parent.css("margin-top");
      var words = $(".gretting ul > li").length;

      if( value == '0px' ) {
        parent.css("margin-top", "-150px");
      }else if( value == '-150px' ){
        parent.css("margin-top", "-300px");        
      }else if( value == '-300px' ){
        parent.css("margin-top", "-450px");        
      }else if( value == '-450px' ){
        parent.css("margin-top", "-600px");        
      }else if( value == '-600px' ){
        parent.css("margin-top", "-750px");        
      }else if( value == '-750px' ){
        parent.css("margin-top", "-900px");        
      }
      else if( value == '-900px' ){
        parent.css("margin-top", "0px");        
      }

    }

    setInterval(change_text, 2000);

});// Document ready

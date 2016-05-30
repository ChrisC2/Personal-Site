
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 110,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#CCFF33"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#CCFF33"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
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
      "enable": true,
      "distance": 150,
      "color": "#CCFF33",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
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
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
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
});



$('.Mwork').click(function() {
  $('html,body').animate({
      scrollTop: $("#portfolio").offset().top
    },
    'slow');
});

//Auto Scroll on Click
$('.Mcontact').click(function() {
  $('html,body').animate({
      scrollTop: $("#contact").offset().top
    },
    'slow');
});

$('.Mhome').click(function() {
  $('html,body').animate({
      scrollTop: $("#particles-js").offset().top
    },
    'slow');
});

$('.Mservices').click(function() {
  $('html,body').animate({
      scrollTop: $("#services").offset().top
    },
    'slow');
});

$('.MaboutMe').click(function() {
  $('html,body').animate({
      scrollTop: $("#aboutMe").offset().top
    },
    'slow');
});

//Pie Chart Init
$(function() {
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#c6ff00',
    trackColor:	"#ecf0f1",
    size: 130,
    animate: 500
  });
 $(".button-collapse").sideNav();
 $('.modal-trigger').leanModal()
});

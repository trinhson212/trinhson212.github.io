$(document).ready(function(){

 	$.scrollify({
		section : "section",
		sectionName : "section-name",
		interstitialSection : "",
		easing: "easeOutExpo",
		scrollSpeed: 789,
		offset :50,
		scrollbars: false,
		standardScrollElements: ".normal-scroll",
		setHeights: false,
		overflowScroll: true,
		before:function() { scrollspy($.scrollify.current().attr('data-section-name'))},
		after:function(i) {
      $.scrollify.update();    
      $('.navbar').animate({'opacity':1},234);
        const $body = $('body');
        let preIndex = parseInt($body.attr('data-pre-index'));
        let direction = i > preIndex ? 'down' : 'up';

        $body
            .attr('data-pre-index', i)
            .removeClass('up down')
            .addClass(direction);              
    },
		afterResize:function() {},
		afterRender:function() {
      $('body').attr('data-pre-index', 0);
    }
	});
  
	
	function scrollspy(sectionName){
    
  var morphing1 = anime({
  targets: '.polymorph',
  points: [
      
    { value: '0,0 0,0 0,0 0,200' },
    { value: '0,0 100,0 50,200 0,200' },
    { value: '0,0 100,0 100,200 0,200' },
    { value: '100,0 100,0 100,200 50,200' },
    { value: '100,0 100,0 100,200 100,200' }
    
  ],
  easing: 'easeOutQuad',
  duration: 1600,
  loop: false
});

    $('.navbar').animate({'opacity':0},222);
		$('.navbar-nav li').removeClass('active');
		$('.navbar-nav li').has('a[href="#'+sectionName+'"]').addClass('active');
	}	

	$('.navbar-nav li a, .link').on('click', function(e){	
		$('.navbar-nav a').blur();
    if($(window).width()<768){
       
    $('#main-menu').collapse('toggle');
       
       }
		e.preventDefault()
		$('.navbar-nav li').removeClass('active');
		$(this).parents('li').addClass('active');
		var link = $(this).attr('href');
		$.scrollify.move(link);
	});	
  
  
	$('.btn-next').on('click', function(e){	
		$.scrollify.next();
	});
  var home_slides = $('#home-slides');
	home_slides.owlCarousel({
		loop:true,
		items:1,
		animateOut:'fadeOut',
		autoplay:5000,
    nav:false,
    dots:false,
	 
	});
		// add animate.css class(es) to the elements to be animated
	  function setAnimation ( _elem, _InOut ) {
		// Store all animationend event name in a string.
		// cf animate.css documentation
		var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		_elem.each ( function () {
		  var $elem = $(this);
		  var $animationType = 'animated ' + $elem.data( _InOut );

		  $elem.addClass($animationType).one(animationEndEvent, function () {
			$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
		  });
		});
	  }

	// Fired before current slide change
	  home_slides.on('change.owl.carousel', function(event) {
		  var $currentItem = $('.owl-item', home_slides).eq(event.item.index);
		  var $elemsToanim = $currentItem.find("[data-out]");
		  setAnimation ($elemsToanim, 'out');
	  });

	// Fired after current slide has been changed
	  home_slides.on('changed.owl.carousel', function(event) {

		  var $currentItem = $('.owl-item', home_slides).eq(event.item.index);
		  var $elemsToanim = $currentItem.find("[data-in]");$elemsToanim.css({'opacity':'1','visibility':'visible'})
		  setAnimation ($elemsToanim, 'in');
	  })

	// Fired after current slide has been changed
	  home_slides.on('changed.owl.carousel', function(event) {

		  var $currentItem = $('.owl-item', home_slides).eq(event.item.index);
		  var $elemsToanim = $currentItem.find("[data-in]");
		  setAnimation ($elemsToanim, 'in');
	  })

  
  window.sr = ScrollReveal();

	sr.reveal('.reveal', {origin:'bottom', delay:1500,duration:1000, distance: '100px',opacity:0, reset: true });

  var morphing1 = anime({
  targets: '.polymorph',
  points: [
      
    { value: '0,0 0,0 0,0 0,200' },
    { value: '0,0 100,0 50,200 0,200' },
    { value: '0,0 100,0 100,200 0,200' },
    { value: '100,0 100,0 100,200 50,200' },
    { value: '100,0 100,0 100,200 100,200' }
    
  ],
  easing: 'easeOutQuad',
  duration: 1600,
  loop: false
});
	
});




$(window).load(function() {
	if($(window).width()<768){
		$('p > br').css({'display': 'none'})
	}
	if($(window).width()>768){
		$('p > br').css({'display': 'block'})
	}
	$.scrollify.update();
});

$(window).resize(function() {
	if($(window).width()<768){
		$('p > br').css({'display': 'none'})
	}
	if($(window).width()>768){
		$('p > br').css({'display': 'block'})
	}
});

const countdown = () => {
	// Specify the date and time we are counting down to.
	const countDate = new Date("Jan 1, 2035 00:00:00").getTime();
	const now = new Date().getTime();
	const remainingTime = countDate - now;
  
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
  
	const textDay = Math.floor(remainingTime / day);
	const textHour = Math.floor((remainingTime % day) / hour);
	const textMinute = Math.floor((remainingTime % hour) / minute);
	const textSecond = Math.floor((remainingTime % minute) / second);
  
	document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
	document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
	document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
	document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
  };
  
  // should use 500 as setInterval won't always run on time.
  setInterval(countdown, 500);

  
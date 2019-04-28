 /*------------------------------------
 *Author:MD ABU SAYED
 *Template:Vision Optics
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	if ($(window).width()<766){
     	$("body").click(function(e){
  			$(".vision-top-link").fadeOut("fast");
		});
    } 

	

	$(window).scroll(function(){
	    if ($(this).scrollTop()>150){
	      $('.action-bar').addClass('fixed-nav');
	      
	    } 
	    else {
	      $('.action-bar').removeClass('fixed-nav');
	    }
  	});

  	$(".mobile-nav-icon").click(function(e){
		e.stopPropagation();
	  	$(".sidebar-wrapper").animate({
	    	left: 0
	  	}, "fast");
	});

  	$(".closetbn").click(function(){
	  	$(".sidebar-wrapper").animate({
	    	left: "-500px"
	  	}, "fast");
	});

  	$(".mbls-icon").click(function(e){
		e.stopPropagation();
	  	$(".mbl-search-box").fadeToggle("fast");
	});

	$(".mbls-close").click(function(e){
		e.stopPropagation();
	  	$(".mbl-search-box").fadeOut("fast");
	});

  	$(".mbl-top-link").click(function(e){
		e.stopPropagation();
	  	$(".vision-top-link").fadeToggle("fast");
	});


	$(".mbl-filter").click(function(e){
		e.stopPropagation();
	  	$(".catalog-filter").animate({
	    	right: 0
	  	}, "fast");
	});

  	$(".filter-closetbn").click(function(){
	  	$(".catalog-filter").animate({
	    	right: "-230px"
	  	}, "fast");
	});


  	// if ($(window).width()<768){
   //    $('.col-logo').addClass('order-12');
   //    $('.col-icon').addClass('order-1');
      
   //  } 
   //  else {
   //    $('.col-logo').removeClass('order-12');
   //    $('.col-icon').removeClass('order-1');
   //  }


   // Start Home Slider Js

 //    $('#main-slider').owlCarousel({
 //    	// autoplay:true,
 //    	autoplayHoverPause:true,
 //    	dots:true,
 //    	items:1,
 //    	loop:true,
	//     nav:false,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:1
	//         },
	//         768:{
	//             items:1
	//         }
	//     },
	//     slideBy:1,
	//     smartSpeed:1800
	// })

    // End Home Slider Js

    $('.btn-qty').on('click',function(e){
    	e.preventDefault();
    
    	var button = $(this);
      	var oldValue = button.parent().find("input").val();
      	var newVal;
    
    	if (button.text() == "+") {
    	  	newVal = parseFloat(oldValue) + 1;
    	} else{
    		if (oldValue > 0) {newVal = parseFloat(oldValue) - 1;} else {newVal = 0;}
    	}
        button.parent().find("input").val(newVal);
    });

    $('#zoom_01').elevateZoom({
		cursor: "default",
		borderSize: 1,
		responsive: true,
		zoomLens: false,
		zoomWindowWidth: 900,
		zoomWindowFadeIn: 500,
		zoomWindowFadeOut: 750
   	}); 


});



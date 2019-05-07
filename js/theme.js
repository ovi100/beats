 /*------------------------------------
 *Author:MD ABU SAYED
 *Template:Radner
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	if ($(window).width()<766){
     	$("body").click(function(e){
  			$(".store-search").fadeOut("fast");
		});
    } 

	
    // Menu Scrolling Effect
	$(window).scroll(function(){
	    if ($(this).scrollTop()>150){
	      $('.action-bar').addClass('fixed-nav');
	      
	    } 
	    else {
	      $('.action-bar').removeClass('fixed-nav');
	    }
  	});

	// Menu Hover Icon Change
  	$(".has-dropdown").hover(
  		function(){
    		$("i").removeClass("icofont-thin-down").addClass("icofont-thin-up");
    		// $(".dropdown-content").fadeIn('slow');
    	}, 
    	function(){
		    $("i").removeClass("icofont-thin-up").addClass("icofont-thin-down");
		    // $(".dropdown-content").fadeOut('slow');
		}
  	);


  	$(".sicon").click(function(e){
  		e.stopPropagation();
	  	$(".store-search").fadeIn("fast");
	});

	$(".scls-btn").click(function(e){
		e.stopPropagation();
	  	$(".store-search").fadeOut("fast");
	});


  	$(".cplink").click(function(e){
		e.stopPropagation();
	  	$(".custom-page").fadeToggle("fast");
	});

  	$(".cpcls-btn").click(function(e){
		e.stopPropagation();
	  	$(".custom-page").fadeOut("fast");
	});

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

    $('#pzoom').elevateZoom({
		zoomType: "inner",
  		cursor: "crosshair",
  		gallery: "zoomControl",
		borderSize: 1,
		responsive: true,
		zoomLens: false,
		zoomWindowWidth: 900,
		zoomWindowFadeIn: 500,
		zoomWindowFadeOut: 750
   	}); 


});



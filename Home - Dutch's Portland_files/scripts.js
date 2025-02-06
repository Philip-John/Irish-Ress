jQuery(document).ready(function() {

	'use strict';

	/** Slider ************************************************************/
        jQuery('#slider').nivoSlider({
                effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
                randomStart: false, // Start on a random slide
                animSpeed: 500, // Slide transition speed
                pauseTime: 7000, // How long each slide will show
                directionNav: true, // Next & Prev navigation
                directionNavHide: false, // Only show on hover
                controlNav: false, // 1,2,3... navigation
                keyboardNav: true, // Use left & right arrows
                pauseOnHover: true, // Stop animation while hovering
                manualAdvance: false, // Force manual transitions
                captionOpacity: 0.85, // Universal caption opacity
                prevText: '<i class="fa fa-arrow-left"></i>', // Prev directionNav text
                nextText: '<i class="fa fa-arrow-right"></i>' // Next directionNav text
        });

	
        /** Superfish *********************************************************/
        if (jQuery().superfish) {
		jQuery('ul.sf-menu').superfish({
			autoArrows: true, // arrow mark-up
			dropShadows: false, // drop shadows                        
			animationOpen: {height:'show'},
			animationClose: {height:'hide',opacity:'hide'},
			delay: 200,
			speed: 200
		});
        }
        
	jQuery('ul.sf-menu li').on({
		mouseenter: function() {
			jQuery(this).addClass('sfHover');
		}, mouseleave: function() {
			jQuery(this).removeClass('sfHover');
		}        
	});



	/** SLICKNAV RESPONSIVE MENU
	jQuery('.primary-menu').slicknav({
		label: '<i class="toggle-nav fa fa-navicon"></i>',
		openedSymbol: '',
		closedSymbol: '',
		closeOnClick: true,
		prependTo:'#site-navigation-responsive'
	});
 *****************************************************/	


	/** Responsive Videos ******************************************************/
	jQuery("#content").fitVids();


        
        /** Toggle ************************************************************/	
        jQuery(".toggle_container").hide(); 
        jQuery("h6.trigger").on("click", function(){
               jQuery(this).toggleClass("active").next().slideToggle("fast");
               return false; //Prevent the browser jump to the link anchor
        });
        


        /** Tabs **************************************************************/
        jQuery(".tabs").tabs();

        

	/**  PRETTYPHOTO LIGHTBOX *********************************************/
	if (jQuery().prettyPhoto) {
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', 
			slideshow: false,  
			autoplay_slideshow: false, 
			opacity: 0.90,  
			show_title: false, 
			allow_resize: true, // Resize the photos bigger than viewport. true/false 
			default_width: 840,
			default_height: 840,
			deeplinking: false,
			overlay_gallery: false,
			counter_separator_label: '/', // The separator for the gallery counter 1 "of" 2
			theme: 'red_sun', 
			horizontal_padding: 20, // The padding on each side of the picture 
			autoplay: true, // Automatically start videos: True/False
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<div id="resizetoggle"> \
										<a href="#" class="pp_expand"> \
											<i class="fa fa-expand"></i>  \
											<i class="fa fa-compress"></i> \
										</a> \
										</div> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#"><div class="pp_next_inner"><span class="pe-7s-angle-left"></span></div></a> \
											<a class="pp_previous" href="#"><div class="pp_previous_inner"><span class="pe-7s-angle-right"></span></div></a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous"><span class="pe-7s-angle-left"></span></a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next"><span class="pe-7s-angle-right"></span></a> \
											</div> \
											<p class="pp_description"></p> \
											{pp_social} \
											<a class="pp_close" href="#"><i class="pe-7s-close"></i></a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			social_tools: false
		});
	}

	if (jQuery().prettyPhoto) {
		jQuery("a[data-rel^='prettyPhoto-video']").prettyPhoto({
			animation_speed: 'fast', // fast/slow/normal 
			slideshow: false, // false OR interval time in ms 
			autoplay_slideshow: false, // true/false 
			opacity: 0.90, // Value between 0 and 1 
			show_title: false, // true/false 
			allow_resize: true, // Resize the photos bigger than viewport. true/false 
			default_width: 840,
			default_height: 540,
			deeplinking: false,
			counter_separator_label: '/', // The separator for the gallery counter 1 "of" 2
			theme: 'red_sun', // light_rounded / dark_rounded / light_square / dark_square / facebook
			horizontal_padding: 20, // The padding on each side of the picture 
			autoplay: true, // Automatically start videos: True/False
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<div id="resizetoggle"> \
										<a href="#" class="pp_expand"> \
											<i class="fa fa-expand"></i>  \
											<i class="fa fa-compress"></i> \
										</a> \
										</div> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#"><div class="pp_next_inner"><span class="pe-7s-angle-left"></span></div></a> \
											<a class="pp_previous" href="#"><div class="pp_previous_inner"><span class="pe-7s-angle-right"></span></div></a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous"><span class="pe-7s-angle-left"></span></a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next"><span class="pe-7s-angle-right"></span></a> \
											</div> \
											<p class="pp_description"></p> \
											{pp_social} \
											<a class="pp_close" href="#"><i class="fa fa-times"></i></a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			social_tools: false
		});
	}

   

});




/** RESIZING **********************************************************/

//Initial load of page
jQuery(window).on('load',sizeContent);
	
//Every resize of window
jQuery(window).resize(sizeContent);
	
//Dynamically assign height and width
function sizeContent() {
	
	'use strict';
	
        var wpadmin = jQuery('#wpadminbar').height();
        var windowWidth = jQuery(window).width();
	var windowHeight = jQuery(window).height();
	var newHeight = jQuery(window).height();
	var topbar = jQuery('#top-bar-wrap').height();
	var wrappertop = jQuery('#wrapper').css('marginTop');
	var wrappertopint = parseInt(wrappertop);


	/** STICKY SIDEBAR ****************************************************/
	if ( jQuery( ".left-sticky" ).length ) {
		if (windowWidth > 960) {
			jQuery('#left.left-sticky').theiaStickySidebar({
				additionalMarginTop: wrappertopint + topbar + wpadmin,
				additionalMarginBottom: 20
			});
		} 
	}
}


// WINDOW LOAD
jQuery(window).on('load', function () {
        
        'use strict';
        
        /** Masonry Floating Boxes *******************************************/
	var jQuerycontainer = jQuery('.m-container').masonry();
	jQuerycontainer.imagesLoaded( function() {
	  	jQuerycontainer.masonry();
	});

});

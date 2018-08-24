jQuery(document).ready(function($){
if ( $().owlCarousel ) {
    var owl = jQuery(".owl-carousel");
        owl.each(function(){
            var items    				= $(this).data('item'),
				autoplay   				= $(this).data('autoplay'),
				margin    				= $(this).data('margin'),
				nav    					= $(this).data('nav'),
				dots    				= $(this).data('dots'),
				screen320    			= $(this).data('screen320'),
				screen480    			= $(this).data('screen480'),
				screen768   			= $(this).data('screen768'),
				// URLhashListener 		= $(this).data('URLhashListener'),
				autoplayTimeout 		= $(this).data('autoplayTimeout'),
				autoheight   			= $(this).data('autoheight');

            $(this).owlCarousel({
				items: items,
				autoplay: autoplay,
				margin: parseInt( margin ),
				loop: true,
				center: false,
				autoplayTimeout: autoplayTimeout,
				autoplaySpeed: 3000,
				nav: nav == "true" ? true : false,
				autoHeight : autoheight == "true" ? true : false,
				navText: [
				'<i class="fa fa-angle-left"></i>',
				'<i class="fa fa-angle-right"></i>'
				],
				dots: dots,
				lazyLoad: true,
				lazyContent: true,
				responsive: {
					320: {
						items: 1
					},
					480: {
						items: 3
					},
					768: {
						items: screen768
					},
					1200: {
						items: items
					}
	             },
             // URLhashListener: URLhashListener == "true" ? true : false,
            });
    	});
    }
});
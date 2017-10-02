jQuery(document).ready(function(){
	jQuery('table').magnificPopup({
		delegate: 'td.link',
		mainClass: 'mfp-zoom-in',
		callbacks: {
		    beforeOpen: function() {
		    	briefing = jQuery(this.st.el).find('.data').data('briefing');

		    	jQuery('#mfp-popup-program .avator').html( jQuery(this.st.el).find('.avatar').html() );
		    	jQuery('#mfp-popup-program .data-title').html( jQuery(this.st.el).find('.data-title').html() );
		    	jQuery('#mfp-popup-program .data-description').html( jQuery(this.st.el).find('.description').html() );
		    	if( briefing != undefined && briefing != '' ){
		    		jQuery('#mfp-popup-program .data-briefing').html('<a target="_blank" href="'+ briefing +'">檢視</a>');
		    	} else {
		    		jQuery('#mfp-popup-program .data-briefing').text('未提供');
		    	}
		    	jQuery('#mfp-popup-program .data-speaker').text( jQuery(this.st.el).find('.speaker').text() );
		    },
		    close: function() {
		    	jQuery('#mfp-popup-program .avator').html('');
		    	jQuery('#mfp-popup-program .data-title').text('');
		    	jQuery('#mfp-popup-program .data-description').html('');
		    	jQuery('#mfp-popup-program .data-briefing').find('a').attr('href', 'javascript:void(0)');
		    	jQuery('#mfp-popup-program .data-speaker').text('');
		    }
		},
		midClick: true 
	});
	//*/
});
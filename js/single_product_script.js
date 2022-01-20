(function ($) {

//Related product tabs
$('body').on('click', '.related_tabs a', function(e){
		var this_tab = $(this).attr('data-tab');
		$(this).parent('.related_tabs').find('a').removeClass('active');		
		$(this).addClass('active');	
		$(this).parent('.related_tabs').next('.related_tabs_content').find('.tabs').removeClass('active');	
		$(this).parent('.related_tabs').next('.related_tabs_content').find('.'+this_tab).addClass('active');		
	});	

})(jQuery);

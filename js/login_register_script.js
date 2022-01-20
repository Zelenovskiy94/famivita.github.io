(function ($) {
current_url = window.location.href;

if(jQuery.cookie("user_loggedin") == 1){
	$('.btn_signin').addClass('hide');
	}
	else{
		$('.btn_signin').addClass('show');
		}	

jQuery('body').on('click', '.btn_signin', function(e){
	  e.preventDefault();
	  if(jQuery('#login_register.fv_popup').length > 0){
		  jQuery('#login_register.fv_popup').show();
		  }	
	else{	  
	  load_login_popup_html('popup_show');
	}
	});
	
function load_login_popup_html(popup_show){
	if(jQuery('#login_register.fv_popup').length > 0){
            return;
         }	 
	jQuery.ajax({
	  type: 'POST',
	  dataType: 'json',
	  url: fvshop_text.ajaxurl,
	  data: { 
		  'action': 'login_popup_load',
		  },
	  beforeSend: function(){
		if(popup_show){	  
		jQuery('body').prepend('<div class="loading_div"></div>');
		}
		},	  
	  success: function(data){
		if(data.this_user_already_loggedin == true){ 
		jQuery.cookie("user_loggedin", 1, {expires : 14, path : '/'});	
		window.location.href = current_url;		
		}		
		else{
		jQuery('.site-footer').append(data.return_html);
		if(popup_show){	
		jQuery('.loading_div').remove();
		jQuery('#login_register.fv_popup').show();	
		jQuery('#login_register button').addClass('disabled');
		jQuery('#login_register .woocommerce-Input').addClass('required');
		jQuery('input[type="password"]').parent().append('<button type="button" class="password_eye"></button>')
		}
		//$().imageBgPreload($().onceLoaded);	
		}
	  }
	  });
	}

/*jQuery(window).scroll(function(){
 if (jQuery('#login_register.fv_popup').length <= 0 && (jQuery(window).scrollTop() >=50)) {
	 load_login_popup_html();
	 jQuery(window).off('scroll');
 }
});*/	

jQuery(document).on('submit', '#login_register form.login', function(e){       
	  jQuery.ajax({
		  type: 'POST',
		  dataType: 'json',
		  url: fvshop_text.ajaxurl,
		  data: { 
			  'action': 'ajax_login',
			  'username': jQuery('form.login #username').val(), 
			  'password': jQuery('form.login #password').val(), 
			  'woocommerce-login-nonce': jQuery('form.login #woocommerce-login-nonce').val() 
			  },
		  beforeSend: function(){
			jQuery('#login_register .fv_popup_inner').prepend('<div class="loading_div"></div>');			
			},	  
		  success: function(data){
			  if (data.loggedin == true){
				 window.location.href = current_url;		
			  }
			  else{
				  jQuery('.loading_div').remove();
				  jQuery('#login_register .login_register_ajax_response').html('<div class="login_register_error bg_Carrot_red_90">'+data.message+'</div>');
				  }
		  }
	  });
	  e.preventDefault();
  });

jQuery(document).on('submit', '#login_register form.register', function(e){       
	  jQuery.ajax({
		  type: 'POST',
		  dataType: 'json',
		  url: fvshop_text.ajaxurl,
		  data: { 
			  'action': 'ajax_register', 
			  'email': jQuery('form.register #reg_email').val(), 
			  'password': jQuery('form.register #reg_password').val(), 
			  'woocommerce-register-nonce': jQuery('form.register #woocommerce-register-nonce').val() 
			  },
		  beforeSend: function(){
			jQuery('#login_register .fv_popup_inner').prepend('<div class="loading_div"></div>');			
			}, 
		  success: function(data){			  
			  if (data.loggedin == true){
				  window.location.href = current_url;		
			  }
			  else{
				  jQuery('.loading_div').remove();
				  jQuery('#login_register .login_register_ajax_response').html('<div class="login_register_error bg_Carrot_red_90">'+data.message+'</div>');
				  }
		  }
	  });
	  e.preventDefault();
  });



jQuery('body').on('click', '.goto_register_page', function(e){
	
		jQuery('#login_register .login_register_ajax_response').html('');
		
		jQuery('#login_register .u-column1').hide();
		jQuery('#login_register .u-column2').show();
		
		jQuery('.login_form_related').addClass('hidden');
		jQuery('.register_form_related').removeClass('hidden');		
	});
jQuery('body').on('click', '.login_back', function(e){
	
		jQuery('#login_register .login_register_ajax_response').html('');
	
		jQuery('#login_register .u-column1').show();
		jQuery('#login_register .u-column2').hide();
		
		jQuery('.login_form_related').removeClass('hidden');
		jQuery('.register_form_related').addClass('hidden');
		
	});	
	
jQuery('body').on('click', '.checkout_register_button_nav', function (e) {
	  setContentCheckoutRegister($(this).attr('data-item'))
  });	
function setContentCheckoutRegister(elem){
		  $('.checkout_register_elem').removeClass('active')
		  $('.' + elem).addClass('active')
	  }			

})(jQuery);

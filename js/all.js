'use strict';
function copyText(elem) { 
    elem.textContent = 'Coppied'
    let copyText = elem.previousElementSibling
    copyText.classList.add('coppied')
    window.navigator.clipboard.writeText(copyText.textContent)
}
(function ($) {

var win_width = jQuery(window).width();

//youtube video shortcode related
jQuery('.youtube_video').on('click', function(e){
	e.preventDefault();
	var this_img = jQuery(this);
	
	var youtube_video_banner = this_img.attr('href');
	//alert('youtube_video_banner: '+youtube_video_banner);
	
	var youtube_video_height = this_img.attr('data-height');
	//alert('youtube_video_height: '+youtube_video_height);
	
	var youtube_video_width = this_img.attr('data-width');
	//alert('youtube_video_width: '+youtube_video_width);
		
	//jQuery('.utuve-vdo-icon').remove();
	var youtube_html = '<div class="iframe_container"><iframe class="responsive-iframe" src="'+youtube_video_banner+'" width="'+youtube_video_width+'" height="'+youtube_video_height+'" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay"></iframe>';
	
	this_img.parent().html(youtube_html);
});


$.fn.gotoCorrectPosition =  function( target ){
	if(target && jQuery(target).length > 0){		  
	  var scroll_pos = 70;
	  if(jQuery('.sticky_header_banner').length > 0 && win_width < 1200){
			scroll_pos = 106;
			}

	  jQuery('html, body').animate({
		  scrollTop: jQuery(target).offset().top - scroll_pos
	  }, 500);
	}
}

//Scroll to some position by link click
$('body').on('click', '.go_to', function(e){
		e.preventDefault();
		var destination_class = $(this).attr('data-class');		
		$().gotoCorrectPosition( destination_class );	
		
		//if need to hide clicked button
		if($(this).hasClass('hide_after_click')){
			$(this).hide();
			}
	});


//slick slider start	

// setTimeout(function(){
$('.related_product .products').addClass('auto_slides')
$(`.auto_slides_dot, .single_slides_dot, .auto_slides, .single_slides_dot_numeric .swiper-wrapper, 
.auto_slides_center, .responsive_slides, .responsive_slides_per_column, .responsive_grid_to_line,
.single_slides_dot_numeric, .two_slides_dot, .single_slides_loop`).children().addClass('swiper-slide')
$(`.auto_slides_dot, .single_slides_dot, .responsive_slides, .responsive_slides_per_column,
 .responsive_grid_to_line, .single_slides_dot_numeric, .two_slides_dot`).append('<div class="swiper-pagination"></div>')
$(`.single_slides_dot, .two_slides_dot, .single_slides_dot_numeric, .responsive_slides, .auto_slides_dot`).append('<div class="buttons_navigation"><button class="button Button_Circle prev-slide"></button><button class="button Button_Circle next-slide"></button></div>')
//auto slide 
let autoSlides = new Swiper(".auto_slides", {
    slidesPerView: 'auto',
    createElements: true,
    allowTouchMove: true,
});
//auto slide center 
let autoSlidesCenterLoop = new Swiper(".auto_slides_center", {
    slidesPerView: 'auto',
    createElements: true,
    allowTouchMove: true,
    centeredSlides: true, 
    loop: true,
});
//slides responsive 
let slidesResponsive = new Swiper(".responsive_slides", {
    slidesPerView: 1,
    createElements: true,
    allowTouchMove: true,
    spaceBetween: 16,
    centerInsufficientSlides: true,
    autoHeight: true,
    navigation: {
        nextEl: ".buttons_navigation .next-slide",
        prevEl: ".buttons_navigation .prev-slide",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
        navigation: false
      },
    },
  });
//slides responsive Per Column
let slidesResponsivePerColumn = new Swiper(".responsive_slides_per_column", {
    slidesPerView: 1,
    slidesPerColumn: 2,
    grid: {
      rows: 2,
    },
    createElements: true,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      1084: {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerColumn: 2,
      },
    },
  });
//slides responsive grid to line
let responsive_grid_to_line = new Swiper(".responsive_grid_to_line", {
    slidesPerView: 2,
    createElements: true,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet_numeric">' + ('0' + (index + 1)) + "</span>";
          },
    },
    breakpoints: {
      830: {
        slidesPerView: 2,
        grid: {
            rows: 2,
          },
      },
      1184: {
        slidesPerView: 3,
        grid: {
            rows: 2,
          },
      },
    },
  });
//auto slide with dots	
let auto_slides_dot = new Swiper(".auto_slides_dot", {
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
    },
    createElements: true,
    navigation: {
        nextEl: ".buttons_navigation .next-slide",
        prevEl: ".buttons_navigation .prev-slide",
    },
});
//single slide	
let single_slides = new Swiper(".single_slides", {
    slidesPerView: '1',
    autoHeight: true,
    createElements: true,
    spaceBetween: 60,
    navigation: {
        nextEl: ".gallery_pagination .next",
        prevEl: ".gallery_pagination .prev",
    },
});
let single_slides_loop = new Swiper(".single_slides_loop", {
    slidesPerView: '1',
    autoHeight: true,
    loop: true,
    createElements: true,
    spaceBetween: 60,
    navigation: {
        nextEl: ".gallery_pagination .next",
        prevEl: ".gallery_pagination .prev",
    },
});

//single slide	with dots	
let single_slides_dot = new Swiper(".single_slides_dot", {
    slidesPerView: '1',
    autoHeight: true,
    spaceBetween: 60,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".buttons_navigation .next-slide",
        prevEl: ".buttons_navigation .prev-slide",
    },
    createElements: true,
});
//two slides	with dots	
let two_slides_dot = new Swiper(".two_slides_dot", {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        830: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    createElements: true,
    navigation: {
        nextEl: ".buttons_navigation .next-slide",
        prevEl: ".buttons_navigation .prev-slide",
    },
});

let single_slides_dot_numeric = new Swiper(".single_slides_dot_numeric", {
    slidesPerView: '1',
    spaceBetween: 90,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet_numeric">' + ('0' + (index + 1)) + "</span>";
          },
    },
    navigation: {
        nextEl: ".buttons_navigation .next-slide",
        prevEl: ".buttons_navigation .prev-slide",
    },
    createElements: true,
});
$('.single_slides_dot, .auto_slides_dot, .auto_slides, .single_slides_dot_numeric ').css({'visibility':'visible'});

// }, 1000);

jQuery('.slick_carousel').each(function(){

   function call_other_images_in_this_slider(this_slider){
      this_slider.find('img[data-lazy-src]').each(function(){
         if( jQuery(this).hasClass('lazyloaded') ){
            return;
         }
         var img = jQuery(this);
         img.attr('src', img.attr('data-lazy-src')).removeAttr('data-lazy-src').addClass('lazyloaded').addClass('crutched');
      })
   }

   var sslider = jQuery(this);
   
   // fix 1st slide
   jQuery(window).scroll(function(){
      sslider.find('[data-slick-index="0"]').find('img').each(function(){
         if( jQuery(this).hasClass('lazyloaded')  && !jQuery(this).hasClass('crutched')){

            jQuery(this).addClass('crutched');
            sslider.find('.slick-arrow').remove();
			sslider.find('.slick-dots').remove();
            sslider.slick('reinit');
			remove_single_dot(); //remove slider dot when only one slide	
            call_other_images_in_this_slider(sslider);
         }
      })
   })
   // fix next slides
   sslider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
      var dataId = $('.slick-current').attr("data-slick-index");    
      var timerTimes = 0;
      var timerIsDone= false;
      var timerId = setInterval( function() {
         sslider.find('[data-slick-index="'+dataId+'"]').find('img').each(function(){
            if( jQuery(this).hasClass('lazyloaded')  && !jQuery(this).hasClass('crutched')){
               jQuery(this).addClass('crutched');
               sslider.find('.slick-arrow').remove();
			   sslider.find('.slick-dots').remove();
               sslider.slick('reinit');
			   remove_single_dot(); //remove slider dot when only one slide	
               timerIsDone = true;
            }else{
               // console.log('image loading');
            }   
            timerTimes++;
            if(timerTimes > 200 || timerIsDone){
               clearInterval(timerId);
            }
         })    
      }, 50);
   });
});

//remove slider dot when only one slide	
function remove_single_dot(){
jQuery( 'ul.slick-dots' ).each(function( ) {
	if(jQuery(this).children('li').length <=1){	
		jQuery(this).remove();
		}
});
}

//slick slider end

//popup related start
$.fn.popup_dv_position_set =  function(dv_id_class, add_close_btn){
	var win_width = jQuery(window).width();
	var win_height = jQuery(window).height() - 50;
	var div_width = jQuery(dv_id_class).width();
	var div_height = jQuery(dv_id_class).height();
	
	if(div_height >= win_height){
		div_height = win_height;
		jQuery(dv_id_class).css({'height': div_height+'px', 'overflow-y':'auto'});
		}
	
	var cal_left = (win_width/2) - (div_width/2);
	var cal_top = (win_height/2) - (div_height/2);

	if(win_width > 450){
	jQuery(dv_id_class).css({'left':cal_left, 'top':cal_top+25});
	}
	else{	
	jQuery(dv_id_class).css({'left': - div_width, 'top':cal_top+25});	
	jQuery(dv_id_class).animate({
		left: cal_left
	  }, 500, function() {
	  });
	}
	$(dv_id_class).before('<div class="popup_lightbox"></div>');
	if(add_close_btn && jQuery('.fv_popup_close').length <= 0){
		jQuery(dv_id_class).prepend('<a class="fv_popup_close"></a>');
		}
}
$('.button_track_order').on('click', function(e){
    e.preventDefault()
    let orderId = $(this).attr('order-id');
    $('#popup_track_order_' + orderId).show()
})
$('html, body').on('click', '.fv_popup_close', function(e){
	$(this).closest('.fv_popup').hide();
});
$('html, body').on('click', '.fv_popup, .continue_shopping, .acc_delete_cancel', function(e){
	if (e.target !== this) return;
	$('.fv_popup_close').trigger('click');
    $('#fv_popup_delete_address').remove()
});   
jQuery(document).on('focus', '.full-width input, .fv_popup textarea', function(){
    $(this).prev().addClass('focused')
})
jQuery('.full-width input, .fv_popup textarea').each(function(){
    if(jQuery(this).val()) {
        $(this).prev().addClass('focused')
    }
})
jQuery(document).on('focusout', '.full-width input, .fv_popup textarea', function(){
    if($(this).val() == '') {
        $(this).prev().removeClass('focused')
    }
})
jQuery(document).on('change', '.select__wrap select', function(){
    if($(this).val() != '') {
        $(this).parent().addClass('active')
    } else {
        $(this).parent().removeClass('active')
    }
})
jQuery(document).on('click', '.password_eye', function(){
    $(this).toggleClass('off_eye');
    let type = $(this).prev().attr('type') == "text" ? "password" : 'text';
    $(this).prev().prop('type', type);
})

//popup related end


// Toggle click
jQuery('body').on('click', '.toggle-title', function(e){
		$(this).removeClass('open_first');
		$(this).next('.toggle-content').slideToggle();	
		$(this).toggleClass('open');		
	});

//open first toggle when page load. it need to add class "open_first"	
if(jQuery('.toggle-title.open_first').length > 0){
	jQuery('.toggle-title.open_first').trigger('click');
}


//image preload start	
$.fn.imageBgPreload = function(onComplete){
    
    // preload all background images
    try {
        runBgPreload(onComplete); 
        console.log("preload try successful");
    }
    catch(err) {
        console.log("preload skipped");
        onComplete();
    }
    
        function runBgPreload(onComplete) {
        var imageHolder = document.createElement("div");
        imageHolder.setAttribute("id", "preBgHolder");
        imageHolder.style.display = "none";
        document.getElementsByTagName("body")[0].appendChild(imageHolder);
        var preloads = document.getElementsByClassName("preload");
        var imageBank = document.getElementById("preBgHolder");
        var preloadUrls = [];
        var images = [];
        var pre = [];
        var preStatus = [];
        var allImagesReady;
        var onCompleteFired = false;
        // grab all background images from CSS and preload in a CSS hidden div called preBgHolder.
        function getAllBackgroundImages() {
            for (i = 0; i < preloads.length; i++) {
                    
                    if (window.getComputedStyle(preloads[i]).getPropertyValue("background-image") != "none") {
                        preloadUrls[i] = window.getComputedStyle(preloads[i]).getPropertyValue("background-image");
                    preloadUrls[i] = preloadUrls[i].replace(/\"/g, ''); // removes url quotes as computed different in safari
                    preloadUrls[i] = preloadUrls[i].substring(4, preloadUrls[i].length - 1);
                    images[i] = new Image();
                    images[i].src = preloadUrls[i];
                    images[i].classList.add("preBg");
                    imageBank.appendChild(images[i]);      
                    } else {
                        console.error( "#" + preloads[i].id + " does not contain a background image");
                    }
            }
        }
        // check each img tag in the hidden div has loaded
        function statusListeners() {
            pre = document.getElementsByClassName("preBg");
            for (i = 0; i < pre.length; i++) {
                pre[i].addEventListener("load", checkEachStatus, false);
                preStatus[i] = pre[i].complete;
                //console.log([i] + " load status: " + preStatus[i]);
            }
        }

        function checkEachStatus() {
            //console.log("checkEachStatus()");
            function imageLoadedTrue(loadStatuses) {
                return loadStatuses == true;
            }
            for (i = 0; i < pre.length; i++) {
                preStatus[i] = pre[i].complete;
                //console.log(pre[i].complete + i);
                allImagesReady = preStatus.every(imageLoadedTrue);
                if (allImagesReady == true && onCompleteFired == false) {
                    // mainFired used to stop runMain firing more than once if images load from cache
                    //console.log("onComplete()");
                    onComplete();
                    onCompleteFired = true;
                }
            }
        };
        getAllBackgroundImages();
        statusListeners();
        // if there are no preloads to work with run the fallack function anyway
        if (preloads.length == 0) {
            onComplete();
            console.log("there was nothing to preload");
        }
    }   
}

$.fn.onceLoaded = function(	){
        // this callback function could be a script from any other file etc
        //console.log("onceLoaded fired");
        var mainContent = document.getElementById("page");     
        mainContent.style.opacity = 1;
        mainContent.style.visibility = "visible";
    }
    
//$().imageBgPreload($().onceLoaded);	
	
//image preload end		


//add padding bottom curvy block
(function () {
    const Sections_arr = document.querySelectorAll('.section_wrap')
      for(let i = 0 ; i <= Sections_arr.length; i++) {
          if(Sections_arr[i + 1] && Sections_arr[i + 1].classList.contains('curvy_section_wrap')) {
              Sections_arr[i].classList.add('curvy_section_wrap--padding')
          }
      }  
  }()) 

//x scroll mousewheel
$.fn.hScroll = function (amount) {
    amount = amount || 120;
    $(this).bind("DOMMouseScroll mousewheel", function (event) {
        let oEvent = event.originalEvent, 
            direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
            position = $(this).scrollLeft();
        position += direction > 0 ? -amount : amount;
        $(this).scrollLeft(position);
        event.preventDefault();
    })
};

$(document).ready(function() {
    $('.x_scroll_div_wrap').hScroll(30);
});

//Validate form
$(function() {
    $(document).on('input keyup', '.required, .validate_input',function(){
        let self = this
        let timer = 800;
        clearTimeout($(self).data('timer'));
        $(self).data('timer', setTimeout(function(){
            switch($(self).attr('name')) {
            case "email" :
                isValid(validateEmail(self.value), self)
                break
            case "name" :
                isValid(validateNameSurname(self.value), self)
                break
            case "username" :
                isValid(validateNameSurname(self.value), self)
                break
            case "user_login" :
                isValid(validateUserLogin(self.value), self)
                break
            case "password" :
                isValid(validatePassword(self.value), self)
                break
            default : 
                isValid(true, self)
                break
        }
            const Form = self.closest('form')
            if(self.closest('.set_acc')) {
                const container = self.closest('.set_acc')
                isValidFieldFunc (container, '.button_save')
            }
            isValidFieldFunc (Form, '.button[type="submit"]' )
            
            function isValidFieldFunc (container, btn) {
                const BtnLocal = container.querySelector(btn)
                let inputs = container.querySelectorAll('input.required')
                let isValidField = false
                isValidField = Array.from(inputs).every(function(elem){
                    return $(elem).parent().hasClass('valid')
                });
                if(isValidField) {
                    BtnLocal.classList.remove('disabled')
                } else {
                    BtnLocal.classList.add('disabled')
                }
            }
        }, timer));
        
        
    })
    // Validate email
    function validateEmail(email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
    // Validate name
    function validateNameSurname(str) {
        return str && isNaN(str) && str.length < 40
    }
    // Validate user login
    function validateUserLogin(str) {
        return str && str.length < 40
    }
    // Validate password
    function validatePassword(str) {
        if(str.length < 6 || str.length > 30) {
            return 'No less than 5 characters'
        } else {
            return true
        }
    }
    function isValid(val, elem) {
        if(val === true) {
            $(elem).parent().removeClass('invalid')
            $(elem).parent().addClass('valid')
            return true
        } else {
            $(elem).parent().removeClass('valid')
            $(elem).parent().addClass('invalid')
            return false
        }
    }
    
});
// progress_list_item animation
$('.progress_list_item').parent().addClass('progress_list_container')
const setHeightProgressListItemLine = (parent) => {
    $(parent).find('.progress_list_item').append('<div class="progress_list_item--line"></div>')
    let progress_list_items = Array.from($(parent).find('.progress_list_item'))

    let marginBottom = screen.width < 767 ? 32 : 50
    for (let i = 0; i < progress_list_items.length; i++) {
        if (i >= 1) {
            $(progress_list_items[i]).css('transition-delay', i + 0.5 + 's')
            $(progress_list_items[i]).find('.progress_list_item--line').css('transition-delay', i + 1 + 's')
        }
        if (i < progress_list_items.length - 1) {
            let currentElemHeight = Math.round($(progress_list_items[i]).height()) / 2 - 16,
                nextElemHeight = Math.round($(progress_list_items[i + 1]).height() / 2 - 16)
            $(progress_list_items[i]).find('.progress_list_item--line').css('height',
                currentElemHeight + nextElemHeight + marginBottom + 'px')

        }

    }
}
//scroller Animate start
$(window).on("load scroll", function () {
    document.querySelectorAll('.progress_list_container').forEach((elem, index) => {
        if (!$(elem).hasClass('animated') && $(window).scrollTop() >= $(elem).offset().top - 350) {
            scrollerAnimate(elem);
            setHeightProgressListItemLine(elem)
        }

    })


});

function scrollerAnimate(item) {
    let offsetItem = $(item).offset();

    if ($(window).scrollTop() >= offsetItem.top - 350 || ($(window).scrollTop() == 0 && offsetItem.top == 0)) {
        $(item).addClass("animated");
    }
}
 //scroller Animate end

//accordion 
$('.title_acc').click(function(e) {
    $(this).toggleClass('open').next().slideToggle()
})

function showAccountMenu () {
    $(document).on('click', '#btn-account-menu, .account_menu .close_16', function(){
        $('.bg_state_menu, .account_menu').toggleClass('active')
    })
    $(document).on('click', '.bg_state_menu', function(){
        $('.bg_state_menu, .account_menu').removeClass('active')
    })

}
showAccountMenu ()





	
})(jQuery);


$(document).ready(function(){

   //  increase-height
   $(".show-more-btn").click(function () {
  
      // Select the element that
      // is clicked on
      let curr_elem = $(".ombrelloni-card");
  
      // Set the amount to increase
      let increase_modifier = 1.2;
  
      // Get the current height of the element
      // and parse the value to integer
      let curr_height = 
          parseInt(curr_elem.css("height"), 10);
  
      // Set the CSS value of the element
      curr_elem.css({
  
        // Set the new height 
        // after multiplying
        height: curr_height * increase_modifier,
      });
    });


   // Mobile Menu Icon
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.header-nav nav').slideToggle();
   });

   // Mobile Menu Icon
   $('#nuova_prenotazione_close').click(function(){
      $('.nuova_prenotazione_form').hide();
   });

      
      // Profilo page Carousel
      $('.mie-slider-main.owl-carousel').owlCarousel({
         loop:true,
         margin:24,
         responsive:{
             0:{
                 items:1.1
             },
             450:{
                 items:1.5
             },
             767:{
                 items:2.5
             },
             991:{
                 items:3.5
             },
             1366:{
                 items:4
             }
         }
     })

     
   // Notification
   $('.header-nav nav ul .notification_img1').click(function(){
      $(this).hide();
      $('.header-nav nav ul .notification_img2').show();
      $('.notification_box_main').addClass('show');
   });
   // Notification
   $('.header-nav nav ul .notification_img2').click(function(){
      $(this).hide();
      $('.header-nav nav ul .notification_img1').show();
      $('.notification_box_main').removeClass('show');
   });

   // Notification
   $('.mobile_notification .notification_img1').click(function(){
      $(this).hide();
      $('.mobile_notification .notification_img2').show();
      $('.notification_box_main').addClass('show');
   });
   // Notification
   $('.mobile_notification .notification_img2').click(function(){
      $(this).hide();
      $('.mobile_notification .notification_img1').show();
      $('.notification_box_main').removeClass('show');
   });



      // Profilo and Ricerca Page Mobile Carousel
      $('.mobile-show .owl-carousel').owlCarousel({
         loop:true,
         margin:24,
         responsive:{
               0:{
                  items:1.1
               },
               450:{
                  items:1.5
               },
               767:{
                  items:2.5
               }
         }
      })



      // Ricerca Page Mobile Carousel
      $('.mobile-slider .owl-carousel').owlCarousel({
         loop:true,
         margin:24,
         responsive:{
               0:{
                  items:1.1
               },
               450:{
                  items:1.5
               }
         }
      })


      // Dashboard Mobile Carousel
      $('.disponibili-venduti-slider.owl-carousel').owlCarousel({
            loop:true,
            margin:24,
            responsive:{
               0:{
                  items:1,
               },
               575:{
                  items:1,
               }
            }
      })

      // See More 
      $(".show-more-btn").click(function(e){
         $(".aggiornamenti-card-single:hidden").slice(0,1).fadeIn();
         if ($(".aggiornamenti-card-single:hidden").length < 1) $(this).fadeOut();
       })
      $(".show-more-btn").click(function(e){
         $(".aggiornamenti-card-single-2:hidden").slice(0,1).fadeIn();
         if ($(".aggiornamenti-card-single-2:hidden").length < 1) $(this).fadeOut();
       })

      

});





// Customize Date 

// const dateInputs = document.querySelectorAll('.custom-date-input');

// dateInputs.forEach(function(input) {
//   input.addEventListener('change', function() {
//     if (input.value !== '') {
//       input.removeAttribute('placeholder');
//     } else {
//       input.setAttribute('placeholder', 'dd/mm/yyyy');
//     }
//   });
// });







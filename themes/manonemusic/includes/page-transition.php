<?php

/** 
 * WordPress page transition by WPCookie
 * https://redpishi.com/wordpress-tutorials/page-transition-wordpress/
 */

function wpcookie_page_transition()
{
   /* put your conditional tags here */
   $condition = true;
   /**********************************/
   return $condition;
}
add_filter('wp_head', function () {
   if (wpcookie_page_transition()) { ?>
      <style>
         .page-exit {
            transition: 0.5s all linear;
            transform: translate3d(0, -100%, 0);
         }

         .page-exit.active {
            transform: translate3d(0, 100%, 0);
         }
      </style>

   <?php }
});

// add_filter('body_class', function ($classes) {
//    return array_merge($classes, array('opacity'));
// });


add_filter('wp_footer', function () {
   if (wpcookie_page_transition()) { ?>

      <script>
         document.addEventListener("DOMContentLoaded", function() {

            [...document.querySelectorAll('[js-hook-transition-link]')].forEach(function(e) {
               console.log(e)

               e.addEventListener("click", () => {
                  document.querySelector('.page-exit').classList.add('active');
                  setTimeout(function() {
                     document.querySelector('.page-exit').classList.remove('active');
                  }, 1000);
               });

            })
            setTimeout(function() {
               document.querySelector('.page-exit').classList.remove('active');
            }, 1000);
         });
      </script>
<?php }
});

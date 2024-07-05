<?php

/**
 * Renders the header menu block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 */

// print_r($block);

$links = $attributes['linkList'];

if (count($links) > 0) {
   echo '
   <nav>
      <div class="lg:hidden fixed top-2 right-0 z-menuButtons">
         <button class="absolute h-16 w-16 right-4 md:right-16" js-hook-burger-button>
            <div class="relative w-full h-4" js-hook-button-lines-container>
               <div class="w-12 h-[1px] bg-secondary" js-hook-button-line></div>
               <div class="w-12 h-[1px] bg-secondary" js-hook-button-line></div>
            </div>
         </button>
      </div>
      <ul class="fixed inset-0 lg:relative flex flex-col justify-center items-center lg:flex-row lg:justify-end gap-8 z-30 pointer-events-none" js-hook-link-list>';
   foreach ($links as $link) {
      echo '<li class="pointer-events-auto"><a href="' . $link['slug'] . '" class="text-titleLarge lg:text-bodyMedium lg:underlined-link uppercase">' . $link['label'] . '</a></li>';
   }
   echo '
      </ul>
      <div class="fixed lg:hidden inset-0 bg-primary z-20" js-hook-menu-overlay></div>
   </nav>';
}

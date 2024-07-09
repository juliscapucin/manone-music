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
   <nav class="relative w-1/2" aria-label="Main Navigation">
      <div class="lg:hidden fixed top-2 right-0 h-8 z-menuButtons" role="menubar">
         <button class="absolute w-12 h-12 right-4 md:right-16 flex justify-end items-center" js-hook-burger-button>
            <div class="relative w-full" js-hook-button-lines-container>
               <div class="w-full h-[1px] bg-secondary" js-hook-button-line></div>
               <div class="w-full h-[1px] bg-secondary" js-hook-button-line></div>
            </div>
         </button>
      </div>
      <ul class="fixed inset-0 lg:relative flex flex-col justify-center items-center lg:flex-row lg:justify-end gap-8 z-30 pointer-events-none" js-hook-link-list>';
   foreach ($links as $link) {
      echo '<li role="none" class="pointer-events-auto' . ($link['slug'] == '/home' ? ' lg:hidden ' : '') . '"><a role="menuitem" href="' . $link['slug'] . '" class="header-link underlined-link text-titleLarge lg:text-bodyMedium lg:underlined-link uppercase">' . $link['label'] . '</a></li>';
   }
   echo '
      </ul>
      <div class="fixed lg:hidden inset-0 bg-primary z-20" js-hook-menu-overlay></div>
   </nav>';
}

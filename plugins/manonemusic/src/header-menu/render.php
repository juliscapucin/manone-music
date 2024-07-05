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
   echo '<nav>
   <div class="lg:hidden fixed z-50">
      <button class="" js-hook-burger-button>Menu</button>
      <button class="hidden" js-hook-close-button>Close</button>
   </div>
   <ul class="fixed inset-0 lg:relative flex flex-col justify-center items-center lg:flex-row lg:justify-end gap-8 z-50">';
   foreach ($links as $link) {
      echo '<li class=""><a href="' . $link['slug'] . '" class="text-titleLarge lg:text-bodyMedium lg:underlined-link uppercase">' . $link['label'] . '</a></li>';
   }
   echo '
   </ul>
   <div class="fixed lg:hidden inset-0 bg-primary z-20" js-hook-menu-overlay></div>
   </nav>';
}

<?php

/**
 * Renders the projects / releases block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 */

// print_r($block);

$links = $attributes['linkList'];

if (count($links) > 0) {
   echo '<nav><ul class="flex gap-8">';
   foreach ($links as $link) {
      echo '<li class=""><a href="' . $link['slug'] . '" class="underlined-link uppercase">' . $link['label'] . '</a></li>';
   }
   echo '</ul></nav>';
}

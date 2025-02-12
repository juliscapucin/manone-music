<?php

/**
 * Renders the projects / releases block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 */

$args = array(
   'post_type' => $attributes['section'],
   'posts_per_page' => -1,
   'meta_key' => 'release_date',
   'orderby' => 'meta_value',
   'order' => 'DESC'
);

$query = new WP_Query($args);
$content = '';
$renderClasses = $attributes['classes'];

if ($query->have_posts()) {
   while ($query->have_posts()) {
      $query->the_post();

      $permalink = get_the_permalink();
      $title = get_the_title();
      $thumbnail_url = get_the_post_thumbnail_url();

      $content .= <<<HTML
      <a href="{$permalink}" class="block relative w-full aspect-square" js-hook-transition-link>
         <img class="w-full h-full object-cover" src='{$thumbnail_url}' />
         <p class="hidden md:block">{$title}</p>
      </a>
      HTML;
   }
   wp_reset_postdata();
};

?>
<div class="cards-stack fixed top-32 bottom-0 right-0 md:right-8 w-16 sm:w-24 md:w-40 overflow-y-scroll overscroll-contain pr-4 md:pr-8 pb-8 space-y-8 md:space-y-16">
   <?php
   echo $content;
   ?>
</div>
<?php

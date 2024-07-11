<?php

/**
 * Renders the projects block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 * // print_r($block);
 */

if (!isset($attributes['imgUrl']) || empty($attributes['imgUrl'])) {
   // $siteUrl = get_site_url();
   // $attributes['imgUrl'] = $siteUrl . '/wp-content/uploads/2024/07/manonemusic-about.jpeg';

   $attributes['imgUrl'] = 'https://manonemusic.juliscapucin.com/manonemusic-about/';
}

if (!isset($attributes['imgAlt']) || empty($attributes['imgAlt'])) {
   $attributes['imgAlt'] = 'Placeholder image';
}

$alt_text = $attributes['imgAlt'];
$image_url = $attributes['imgUrl'];

?>


<!-- <figure class="contain-image hidden lg:flex justify-end w-[40%] grayscale opacity-50 absolute top-0 right-0 bottom-8 overflow-clip z-10">
      <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($alt_text); ?>">
      <figcaption class="sr-only"><?php echo esc_attr($alt_text); ?></figcaption>
   </figure> -->

<figure class="contain-image lg:hidden w-full h-full grayscale opacity-50 overflow-clip z-10">
   <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($alt_text); ?>">
   <figcaption class="sr-only" id="about-image-description"><?php echo esc_attr($alt_text); ?></figcaption>
</figure>
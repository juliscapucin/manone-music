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
   $siteUrl = get_site_url();
   $attributes['imgUrl'] = $siteUrl . '/manonemusic-about/';
}

if (!isset($attributes['imgAlt']) || empty($attributes['imgAlt'])) {
   $attributes['imgAlt'] = 'Placeholder image';
}

$alt_text = $attributes['imgAlt'];
$image_url = $attributes['imgUrl'];

?>

<figure class="contain-image w-full h-fit mt-8 md:mt-0 grayscale opacity-50 overflow-clip z-10">
   <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($alt_text); ?>">
   <figcaption class="sr-only" id="about-image-description"><?php echo esc_attr($alt_text); ?></figcaption>
</figure>
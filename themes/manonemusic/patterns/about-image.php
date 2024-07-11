<?php

/**
 * Title: About Image
 * Slug: manonemusic/about-image
 * Categories: Post
 */

$image_url = home_url() . '/wp-content/uploads/2024/07/manonemusic-about.jpeg';
$alt_text = 'Image of Man One Music main man Matt Rudge.';
?>

<!-- Main figure for smaller screens -->
<figure class="contain-image lg:hidden w-full h-full grayscale opacity-50 overflow-clip z-10">
   <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($alt_text); ?>">
   <figcaption class="sr-only" id="about-image-description"><?php echo esc_attr($alt_text); ?></figcaption>
</figure>

<!-- Main figure for larger screens -->
<figure class="contain-image hidden lg:flex justify-end w-[40%] grayscale opacity-50 absolute top-0 right-0 bottom-8 overflow-clip z-10">
   <img src="<?php echo esc_url($image_url); ?>" alt="<?php echo esc_attr($alt_text); ?>">
   <figcaption class="sr-only"><?php echo esc_attr($alt_text); ?></figcaption>
</figure>
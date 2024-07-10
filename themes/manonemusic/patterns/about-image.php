<?php

/**
 * Title: About Image
 * Slug: manonemusic/about-image
 * Categories: Post
 */

$image_url = home_url() . '/wp-content/uploads/2024/07/manonemusic-about.jpeg';
?>

<figure class="contain-image lg:hidden w-full h-full grayscale opacity-50 overflow-clip z-10 flex justify-end">
   <?php echo '<img src="' . $image_url . '" alt="Man One Music" />'; ?>
</figure>

<figure class="contain-image hidden lg:flex justify-end w-[40%] grayscale opacity-50 absolute top-0 right-0 bottom-8 overflow-clip z-10">
   <?php echo '<img src="' . $image_url . '" alt="Man One Music" />'; ?>
</figure>
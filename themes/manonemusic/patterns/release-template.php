<?php

/**
 * Title: Release Template
 * Slug: manonemusic/release-template
 * Categories: Post
 */

// Get the blocks for the current post
$post_blocks = isset(get_post()->post_content) && !empty(get_post()->post_content) ? parse_blocks(get_post()->post_content) : null;
$project_info_block = '';
$embed_block = '';

if (!isset($post_blocks) || empty($post_blocks)) {
   return;
}

$tracklist = get_post_meta(get_the_ID(), 'repeatable_fields', true);

// Loop through the blocks to find the custom blocks and store them
foreach ($post_blocks as $block) {
   if ($block['blockName'] === 'manonemusic/project-info') {
      $project_info_block = render_block($block);
   }
   if ($block['blockName'] === 'core/embed') {
      $embed_block = render_block($block);
   }
}
?>
?>

<!-- wp:group {"tagName":"main","className":"is-style-group-page-container","layout":{"type":"constrained"}} -->
<main class="wp-block-group is-style-group-page-container">
   <!-- wp:columns -->
   <div class="wp-block-columns">
      <!-- wp:column {"width":"85%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30"}}}} -->
      <div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);flex-basis:85%">
         <!-- wp:group {"layout":{"type":"constrained"}} -->
         <div class="wp-block-group">
            <!-- wp:post-title {"level":1,"className":"is-style-post-title-mb text-headlineLarge"} /-->

            <!-- wp:columns {"verticalAlignment":"top","className":"mt-8"} -->
            <div class="wp-block-columns are-vertically-aligned-top mt-8">
               <!-- wp:column {"verticalAlignment":"top","width":"33.34%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:33.34%">
                  <!-- wp:post-featured-image {"aspectRatio":"1","className":"is-style-featured-image-square-mr"} /-->
               </div>
               <!-- /wp:column -->

               <!-- wp:column {"verticalAlignment":"top","width":"66.66%"} -->
               <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:66.66%">
                  <?php

                  echo $project_info_block;

                  if ($tracklist) {
                     $jsonTracks = wp_json_encode($tracklist);
                     echo '<!-- wp:manonemusic/track {"tracklist": ' . $jsonTracks . '} /-->';
                  }
                  ?>
               </div>
               <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->
         </div>
         <!-- /wp:group -->
      </div>
      <!-- /wp:column -->

      <!-- wp:column {"width":"15%"} -->
      <div class="wp-block-column" style="flex-basis:15%">
         <!-- wp:manonemusic/cards-stack {"section":"release","variant":"detail-page","classes":"w-full h-full overflow-y-scroll pt-16 pr-8 pb-8 space-y-8"} -->
         <div class="wp-block-manonemusic-cards-stack"></div>
         <!-- /wp:manonemusic/cards-stack -->
      </div>
      <!-- /wp:column -->
   </div>
   <!-- /wp:columns -->
</main>
<!-- /wp:group -->
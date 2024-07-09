<?php
function my_theme_insert_pattern_on_new_post($post_id, $post, $update)
{
   // Check if the post is newly created and not an update
   if ($update === false && $post->post_type === 'commercial') {
      // Get the block pattern content
      $pattern_content = '<!-- wp:pattern {"slug":"manonemusic/commercial-content"} /-->';

      // Update the post content with the block pattern content
      wp_update_post(array(
         'ID'           => $post_id,
         'post_content' => $pattern_content,
      ));
   }
}
add_action('wp_insert_post', 'my_theme_insert_pattern_on_new_post', 10, 3);

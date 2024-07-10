<?php
function insert_pattern_on_new_post($post_id, $post, $update)
{
   // Define the post types and their corresponding patterns
   $patterns = array(
      'film' => '<!-- wp:pattern {"slug":"manonemusic/film-content"} /-->',
      'commercial' => '<!-- wp:pattern {"slug":"manonemusic/commercial-content"} /-->',
      'project' => '<!-- wp:pattern {"slug":"manonemusic/project-content"} /-->',
      'release' => '<!-- wp:manonemusic/project-info /-->',
   );

   // Check if the post is newly created and not an update
   if ($update === false && array_key_exists($post->post_type, $patterns)) {
      // Get the block pattern content
      $pattern = $patterns[$post->post_type];

      // Update the post content with the block pattern content
      wp_update_post(array(
         'ID'           => $post_id,
         'post_content' => $pattern . $post->post_content,
      ));
   }
}

add_action('wp_insert_post', 'insert_pattern_on_new_post', 10, 3);

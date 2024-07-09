<?php

/**
 * Adds repeatable custom fields metabox for specified post types and labels.
 * 
 * @param string $id Metabox ID.
 * @param string $title Metabox title.
 * @param string $post_type Post type.
 * @param string $meta_key Meta key for storing data.
 * @param array $fields Associative array of field names and their labels.
 */
function add_repeatable_fields_metabox($id, $title, $post_type, $meta_key, $fields)
{
   add_action('admin_init', function () use ($id, $title, $post_type, $meta_key, $fields) {
      add_meta_box($id, $title, function () use ($meta_key, $fields) {
         display_repeatable_meta_box($meta_key, $fields);
      }, $post_type, 'normal', 'default');
   });

   add_action('save_post', function ($post_id) use ($meta_key, $fields) {
      save_repeatable_meta_box($post_id, $meta_key, $fields);
   });
}

function display_repeatable_meta_box($meta_key, $fields)
{
   global $post;

   $repeatable_fields = get_post_meta($post->ID, $meta_key, true);

   wp_nonce_field('repeatable_meta_box_nonce', 'repeatable_meta_box_nonce');
?>
   <script type="text/javascript">
      jQuery(document).ready(function($) {
         $('#add-row').on('click', function() {
            var row = $('.empty-row.screen-reader-text').clone(true);
            row.removeClass('empty-row screen-reader-text');
            row.insertBefore('#repeatable-fieldset-one tbody>tr:last');
            return false;
         });

         $('.remove-row').on('click', function() {
            $(this).parents('tr').remove();
            return false;
         });
      });
   </script>

   <table id="repeatable-fieldset-one" width="100%">
      <thead>
         <tr>
            <?php foreach ($fields as $field_name => $field_label) : ?>
               <th width="40%"><?php echo $field_label; ?></th>
            <?php endforeach; ?>
            <th width="8%"></th>
         </tr>
      </thead>
      <tbody>
         <?php

         if ($repeatable_fields) :
            foreach ($repeatable_fields as $field) {
         ?>
               <tr>
                  <?php foreach ($fields as $field_name => $field_label) : ?>
                     <td><input type="text" class="widefat" name="<?php echo $field_name; ?>[]" value="<?php if ($field[$field_name] != '') echo esc_attr($field[$field_name]); ?>" /></td>
                  <?php endforeach; ?>
                  <td><a class="button remove-row" href="#">Remove</a></td>
               </tr>
            <?php
            }
         else :
            // show a blank one
            ?>
            <tr>
               <?php foreach ($fields as $field_name => $field_label) : ?>
                  <td><input type="text" class="widefat" name="<?php echo $field_name; ?>[]" /></td>
               <?php endforeach; ?>
               <td><a class="button remove-row" href="#">Remove</a></td>
            </tr>
         <?php endif; ?>

         <!-- empty hidden one for jQuery -->
         <tr class="empty-row screen-reader-text">
            <?php foreach ($fields as $field_name => $field_label) : ?>
               <td><input type="text" class="widefat" name="<?php echo $field_name; ?>[]" /></td>
            <?php endforeach; ?>
            <td><a class="button remove-row" href="#">Remove</a></td>
         </tr>
      </tbody>
   </table>

   <p><a id="add-row" class="button" href="#">Add another</a></p>
<?php
}

function save_repeatable_meta_box($post_id, $meta_key, $fields)
{
   if (
      !isset($_POST['repeatable_meta_box_nonce']) ||
      !wp_verify_nonce($_POST['repeatable_meta_box_nonce'], 'repeatable_meta_box_nonce')
   )
      return;

   if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
      return;

   if (!current_user_can('edit_post', $post_id))
      return;

   $old = get_post_meta($post_id, $meta_key, true);
   $new = array();

   $count = count($_POST[array_key_first($fields)]);

   for ($i = 0; $i < $count; $i++) {
      $new_entry = array();
      foreach ($fields as $field_name => $field_label) {
         if (!empty($_POST[$field_name][$i])) {
            $new_entry[$field_name] = stripslashes(strip_tags($_POST[$field_name][$i]));
         }
      }
      if (!empty($new_entry)) {
         $new[] = $new_entry;
      }
   }

   if (!empty($new) && $new != $old)
      update_post_meta($post_id, $meta_key, $new);
   elseif (empty($new) && $old)
      delete_post_meta($post_id, $meta_key, $old);
}

// Example usage for 'commercial' post type
add_repeatable_fields_metabox('repeatable-fields', 'Repeatable Fields', 'commercial', 'repeatable_fields', array('project' => 'Project', 'link' => 'Link'));

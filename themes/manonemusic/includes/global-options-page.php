<?php

function manonemusic_add_admin_menu()
{
   add_menu_page('Global Settings', 'Global Settings', 'manage_options', 'global-settings', 'manonemusic_options_page');
}
add_action('admin_menu', 'manonemusic_add_admin_menu');

function manonemusic_settings_init()
{
   register_setting('globalSettings', 'manonemusic_settings');

   add_settings_section(
      'manonemusic_global_settings_section',
      __('Global Settings', 'manonemusic'),
      null,
      'globalSettings'
   );

   add_settings_field(
      'availability',
      __('Availability', 'manonemusic'),
      'manonemusic_availability_render',
      'globalSettings',
      'manonemusic_global_settings_section'
   );
}
add_action('admin_init', 'manonemusic_settings_init');

function manonemusic_availability_render()
{
   $options = get_option('manonemusic_settings');
   $availability = $options['availability'] ?? '';
?>
   <input type="text" name="manonemusic_settings[availability]" value="<?php echo esc_attr($availability); ?>">
<?php
}

function manonemusic_options_page()
{
?>
   <form action='options.php' method='post'>
      <?php
      settings_fields('globalSettings');
      do_settings_sections('globalSettings');
      submit_button();
      ?>
   </form>
<?php
}

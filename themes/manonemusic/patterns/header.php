<?php

/**
 * Title: Header Pattern
 * Slug: manonemusic/header-pattern
 * Categories: Navigation
 */


$items = array('Films', 'Commercials', 'Projects', 'Releases', 'About', 'Contact');

// Define the base URL for the links
$base_url = "/";

// Start the unordered list
echo '<ul class="flex gap-8">';

// Loop through the array to create list items with links
foreach ($items as $item) {
   // Create a slug from the item name for the URL
   $slug = strtolower($item);
   echo '<li><a href="' . $base_url . $slug . '" class="underlined-link uppercase">' . $item . '</a></li>';
}

// End the unordered list
echo '</ul>';

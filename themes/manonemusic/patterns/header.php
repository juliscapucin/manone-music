<?php

/**
 * Title: Header Pattern
 * Slug: manonemusic/header-pattern
 * Categories: Navigation
 */


$items = array('Films', 'Commercials', 'Projects', 'Releases', 'About', 'Contact');

$base_url = "/";

echo '<ul class="flex gap-8">';

foreach ($items as $item) {
   $slug = strtolower($item);
   echo '<li><a href="' . $base_url . $slug . '" class="underlined-link uppercase">' . $item . '</a></li>';
}

echo '</ul>';

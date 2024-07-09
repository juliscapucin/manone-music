<?php

/**
 * Renders the projects / releases block on the frontend.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 * 
 */

// Debugging: Print the entire attributes array
// echo '<pre>';
// print_r($attributes);
// echo '</pre>';

if (!function_exists('getNextMonth')) {
	function getNextMonth()
	{
		$currentDate = new DateTime();
		return $currentDate->modify('+1 month');
	}
}

if (!function_exists('parseStringToDate')) {
	function parseStringToDate($dateString)
	{
		$parts = explode(" ", $dateString);
		if (count($parts) === 2) {
			$month = DateTime::createFromFormat('F', $parts[0])->format('m');
			$year = intval($parts[1]);
			return new DateTime("$year-$month-01");
		}
		return getNextMonth();
	}
}

if (!function_exists('furtherAvailability')) {
	function furtherAvailability()
	{
		$formatMonth = function ($futureDate) {
			return $futureDate->format('F Y');
		};


		return $formatMonth(getNextMonth());
	}
}

if (!function_exists('furtherAvailabilitySet')) {
	function furtherAvailabilitySet($date)
	{
		$formatMonth = function ($futureDate) {
			return $futureDate->format('F Y');
		};

		$cmsDate = parseStringToDate($date);
		return $cmsDate < getNextMonth() ? $formatMonth(getNextMonth()) : $formatMonth($cmsDate);
	}
}

$finalDate = (isset($attributes['date'])) ? furtherAvailabilitySet($attributes['date']) : furtherAvailability();

?>

<div class="w-full space-y-2 ml-2 mb-16">
	<?php

	echo '<div class=mt-8 color-secondary>';


	echo '<span>Available ' . $finalDate . '</span>';

	echo '</div>';

	echo '<a class="block bg-primary uppercase border border-secondary rounded-3xl mt-8 py-2 px-3 leading-tighter w-fit text-center hover:bg-secondary hover:text-primary transition-colors duration-200" href="' . esc_html($attributes['email']) . '" target="_blank" rel="noopener noreferrer">' . esc_html($attributes['buttonLabel']) . '</a>';

	?>
</div>
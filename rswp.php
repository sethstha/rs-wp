<?php
/**
 * Plugin Name:     RSWP
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     A custom WordPress plugin
 * Author:          Sanjeev Shrestha
 * Author URI:      https://github.com/sethstha
 * Text Domain:     rswp
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Rswp
 */
function rswp_scripts() {
	wp_enqueue_script(
		'rswp-script',
		'http://localhost:3000/bundle.js',
		array(
			'wp-core-data',
			'wp-components',
			'wp-element',
			'wp-editor',
			'wp-rich-text',
			'wp-format-library',
		),
		'1.0.0',
		true
	);
}
add_action( 'admin_enqueue_scripts', 'rswp_scripts' );

function rswp_admin_menu() {
	add_menu_page(
		'RSWP',
		'RSWP',
		'manage_options',
		'rswp',
		'rswp_admin_page',
		'dashicons-admin-site',
		6
	);
}
add_action( 'admin_menu', 'rswp_admin_menu' );

function rswp_admin_page() {
	?>
	<div id="rswp-admin-page"><p>hello</p></div>
	<?php
}
?>

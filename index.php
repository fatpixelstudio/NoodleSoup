<?php

// Assets (dev vs. min+hash)
// PHP read file
$assets_css = $readfromdocroot . '/assets/stylesheets/min/hash.css.json', 'json');
$assets_js = $readfromdocroot . '/assets/javascript/min/hash.js.json', 'json');
// a::show($assets_css, $echo=true); // Show hash.json contents
// a::show($assets_js, $echo=true); // Show hash.json contents
if(c::get('environment') == 'local'):
	$env_suffix = 'dev';
	$main_css = 'main.dev';
	$print_css = 'print.dev';
else:
	$env_suffix = 'min';
	$main_css = $getfromvar . ($assets_css, 'main');
	$print_css = $getfromvar . ($assets_css, 'print');
endif;

?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en_US"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<title>Fat kit &mdash; Front-end starter kit by Fat Pixel</title>
	<meta name="description" content="" />

	<meta name="viewport" content="width=device-width,initial-scale=1.0" />

	<!-- Favicons (https://github.com/audreyr/favicon-cheat-sheet) -->
	<link rel="icon" href="assets/images/favicon-228.png" sizes="228x228">
	<link rel="icon" href="assets/images/favicon-195.png" sizes="195x195">
	<link rel="icon" href="assets/images/favicon-96.png" sizes="96x96">
	<link rel="icon" href="assets/images/favicon-32.png" sizes="32x32">
	<meta name="msapplication-TileImage" content="assets/images/favicon-144.png">
	<meta name="msapplication-TileColor" content="#222222">

	<link rel="stylesheet" href="assets/stylesheets/dev/<?php echo $env_suffix . '/' . $main_css ?>.css" />
	<link rel="stylesheet" href="assets/stylesheets/dev/<?php echo $env_suffix . '/' . $print_css ?>.css" media="print" />

	<?php /* Using Google Fonts? Uncomment this!
	<link href="http://fonts.googleapis.com/css?family=Dosis:400,500,600" rel="stylesheet" type="text/css">
	*/ ?>

	<?php if($_SERVER['SERVER_NAME'] == 'local.domain.com'): ?>
	<script src="assets/javascript/vendor/modernizr.min.js"></script>
	<?php else: ?>
	<script src="assets/javascript/vendor/modernizr.min.js"></script>
	<?php endif; ?>
</head>
<body>
	<!--[if lt IE 7]>
	<p class="oldie-message">Let op! U gebruikt Internet Explorer 6 (een <strong>sterk verouderd</strong> internetprogramma) om deze website te bekijken. <br /> <a href="http://windows.microsoft.com/ie">Download gratis een snellere en veiligere versie</a> om deze website optimaal te ervaren.</p>
	<![endif]-->
	<!--[if IE 7]>
	<p class="oldie-message">U gebruikt Internet Explorer 7 (een <strong>verouderd</strong> internetprogramma) om deze website te bekijken. <br /> <a href="http://browsehappy.com/">Download gratis een snellere en veiligere versie</a> om deze website optimaal te ervaren.</p>
	<![endif]-->

	<header>
		<h1>Fat kit</h1>
	</header>
	<div role="main">
		<p>A front-end starter kit by Fat Pixel.</p>
	</div>
	<footer role="contentinfo">
		<p>Dedication, baby!</p>
	</footer>

	<?php if($_SERVER['SERVER_NAME'] == 'local.domain.com'): ?>
	<script src="assets/javascript/vendor/jquery.min.js"></script>
	<script src="<?php bloginfo( 'stylesheet_directory' ); ?>assets/javascript/dev/main.scripts.dev.js"></script>
	<?php else: ?>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="assets/javascript/vendor/jquery.min.js"><\/script>')</script>
	<script src="assets/javascript/min/main.scripts.min.js"></script>
	<?php endif; ?>

	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-XXXXXXXX-X', 'domain.com');
		ga('send', 'pageview');

	</script>
</body>
</html>

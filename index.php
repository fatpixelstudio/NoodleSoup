<?php

// Assets (dev vs. min+hash)
// Your site should live on it's own domain and should have file_get_contents
// enabled to read the JSON file.
$assets_css = $_SERVER['DOCUMENT_ROOT'] . '/assets/stylesheets/min/hash.css.json';
$assets_js = $_SERVER['DOCUMENT_ROOT'] . '/assets/javascript/min/hash.js.json';

$cssobj = json_decode(file_get_contents($assets_css));
$jsobj = json_decode(file_get_contents($assets_js));

if(strpos($_SERVER['SERVER_NAME'],'local.') !== false):
	$env_suffix = 'dev';
	$main_css = 'main';
	$oldie_css = 'oldie';
	$print_css = 'print';
	$main_js = 'main.scripts';
else:
	$env_suffix = 'min';
	$main_css = $cssobj->main;
	$oldie_css = $cssobj->oldie;
	$print_css = $cssobj->print;
	$main_js = $jsobj->main;
endif;

?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en_US"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />

	<title>Noodle Soup &mdash; Front-end starter kit by Fat Pixel</title>
	<meta name="description" content="" />

	<meta name="viewport" content="width=device-width,initial-scale=1.0" />

	<!-- Favicons (https://github.com/audreyr/favicon-cheat-sheet) -->
	<link rel="icon" href="assets/images/favicon-228.png" sizes="228x228">
	<link rel="icon" href="assets/images/favicon-195.png" sizes="195x195">
	<link rel="icon" href="assets/images/favicon-96.png" sizes="96x96">
	<link rel="icon" href="assets/images/favicon-32.png" sizes="32x32">
	<meta name="msapplication-TileImage" content="assets/images/favicon-144.png">
	<meta name="msapplication-TileColor" content="#222222">

	<!--[if (lt IE 9)]><link rel="stylesheet" href="/assets/stylesheets/<?php echo $env_suffix . '/' . $oldie_css . '.' . $env_suffix .'.css'; ?>"><![endif]-->
	<!--[if gt IE 8]><!--><link rel="stylesheet" href="assets/stylesheets/<?php echo $env_suffix . '/' . $main_css . '.' . $env_suffix ?>.css" /><!--<![endif]-->
	<link rel="stylesheet" href="assets/stylesheets/<?php echo $env_suffix . '/' . $print_css . '.' . $env_suffix ?>.css" media="print" />

	<?php /* Using Google Fonts? Uncomment this!
	<link href="http://fonts.googleapis.com/css?family=Dosis:400,500,600" rel="stylesheet" type="text/css">
	*/ ?>

	<script src="assets/javascript/vendor/modernizr.<?php echo $env_suffix; ?>.js"></script>
</head>
<body>
	<!--[if lt IE 7]>
	<p class="oldie-message">Let op! U gebruikt Internet Explorer 6 (een <strong>sterk verouderd</strong> internetprogramma) om deze website te bekijken. <br /> <a href="http://windows.microsoft.com/ie">Download gratis een snellere en veiligere versie</a> om deze website optimaal te ervaren.</p>
	<![endif]-->
	<!--[if IE 7]>
	<p class="oldie-message">U gebruikt Internet Explorer 7 (een <strong>verouderd</strong> internetprogramma) om deze website te bekijken. <br /> <a href="http://browsehappy.com/">Download gratis een snellere en veiligere versie</a> om deze website optimaal te ervaren.</p>
	<![endif]-->

	<header class="Contain">
		<h1>Noodle Soup</h1>
	</header>
	<div role="main" class="Contain Copy">
		<p>A front-end starter kit by Fat Pixel.</p>
	</div>
	<footer role="contentinfo" class="Contain Copy">
		<p>Dedication, baby!</p>
	</footer>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="assets/javascript/vendor/jquery.min.js"><\/script>')</script>
	<script src="/assets/javascript/<?php echo $env_suffix . '/' . $main_js . '.' . $env_suffix ?>.js"></script>

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

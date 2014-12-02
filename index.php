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
	<link rel="icon" href="assets/images/favicon-120.png" sizes="120x120">
	<link rel="icon" href="assets/images/favicon-72.png" sizes="72x72">
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
	<div role="main" class="Contain">

		<div class="Copy">
			<p>A front-end starter kit by Fat Pixel.</p>

			<h1>Base</h1>

			<p>This page show basic (typographic) HTML elements and how the scoped <em>.Copy</em> class renders them.</p>
			<ul>
				<li><a data-scroll href="#headings">Headings</a></li>
				<li><a data-scroll href="#widont">Widont</a></li>
				<li><a data-scroll href="#paragraph">Paragraph</a></li>
				<li><a data-scroll href="#blockquote">Blockquote</a></li>
				<li><a data-scroll href="#lists">Lists</a></li>
				<li><a data-scroll href="#tags">Tags</a></li>
				<li><a data-scroll href="#table">Table</a></li>
				<li><a data-scroll href="#buttons">Buttons</a></li>
				<li><a data-scroll href="#form">Form</a></li>
			</ul>

			<hr />

			<h2 id="headings">Headings</h2>

			<h1>Heading h1 duis volutpat id metus quis semper</h1>

			<p>Praesent eu leo eget odio fermentum consequat a sit amet mi. Suspendisse sit amet tellus vel odio scelerisque euismod. Vestibulum nisl ligula, commodo sit.</p>

			<h2>Heading h2 duis volutpat id metus quis semper</h2>

			<p>Duis accumsan feugiat eleifend. Morbi in urna nulla. Etiam pretium, ante ultrices euismod euismod, felis velit tempus diam, quis mollis neque enim non purus.</p>

			<h3>Heading 3 duis volutpat id metus quis semper</h3>

			<p>Vivamus at neque at mi vestibulum condimentum sed sit amet arcu. Morbi mauris augue, ultricies eu semper quis, lacinia id quam. Proin.</p>

			<hr />

			<h2 id="paragraph">Paragraph</h2>

			<p>Donec quam felis, ultricies nec, pellentesque eu &#8212; pretium quis, sem. And then Jonathan van Wunnik said, <q class="Quote" lang="en">This is an English inline quote</q>. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. <strong><span class="u-textNoHyphen">These words will not be hyphenated</span></strong>. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

			<p>Donec blandit, quam et tempus egestas, nulla enim viverra orci, ac scelerisque massa felis non libero. Praesent eu dui vel arcu consectetur blandit malesuada a augue. In et.</p>

			<hr />

			<h2 id="blockquote">Blockquote</h2>

			<p>Integer elit velit, suscipit sit amet commodo a, semper vel mi. Vestibulum sit amet sem orci. Aliquam imperdiet odio ut lectus adipiscing venenatis ac quis risus. Pellentesque facilisis gravida commodo. Donec non.</p>

			<figure class="Blockquote"><blockquote lang="en"><p>I&#8217;m going to make him an offer he can&#8217;t refuse.</p></blockquote><figcaption>Don Vito Corleone&#8217;s famous line in <cite><a href="http://www.imdb.com/title/tt0068646/" rel="external nofollow">The Godfather</a></cite></figcaption></figure>

			<p>Cras facilisis suscipit porttitor. Aliquam erat volutpat. Integer commodo lacus ac nibh semper eget facilisis est lobortis. Sed dignissim, erat vitae gravida semper, orci metus porttitor mauris, et laoreet odio justo id tortor. Etiam.</p>

			<figure class="Blockquote"><blockquote lang="en"><p>A wise girl kisses but doesn&#8217;t love, listens but doesnt believe, and leaves before she is left.</p></blockquote><figcaption>Marilyn Monroe</figcaption></figure>

			<p>Vivamus at neque at mi vestibulum condimentum sed sit amet arcu. Morbi mauris augue, ultricies eu semper quis, lacinia id quam. Proin.</p>

			<figure class="Blockquote"><blockquote lang="fr"><p>La vie est une maladie mortelle sexuellement transmissible.</p></blockquote><figcaption>Woody Allen</figcaption></figure>

			<p>Donec blandit, quam et tempus egestas, nulla enim viverra orci, ac scelerisque massa felis non libero. Praesent eu dui vel arcu consectetur blandit malesuada a augue. In et.</p>

			<hr />

			<h2 id="lists">Lists</h2>

			<h3>Unordered list</h3>

			<ul>
				<li>Lorem ipsum dolor sit amet</li>
				<li>Consectetur adipisicing elit</li>
				<li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
				<li>Ut enim ad minim veniam</li>
			</ul>

			<h3>Ordered list</h3>

			<ol>
				<li>Lorem ipsum dolor sit amet</li>
				<li>Consectetur adipisicing elit</li>
				<li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
				<li>Ut enim ad minim veniam</li>
				<li>Ut enim ad minim veniam</li>
				<li>Lorem ipsum dolor sit amet</li>
				<li>Consectetur adipisicing elit</li>
				<li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
				<li>Ut enim ad minim veniam</li>
				<li>Ut enim ad minim veniam</li>
			</ol>

			<h3>Nested list</h3>

			<ul>
				<li>Consectetur adipisicing elit

					<ul>
						<li>Pellentesque habitant morbi tristique senectus</li>
						<li>Sed magna nisl, porta id</li>
					</ul>
				</li>
				<li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

					<ul>
						<li>Praesent nunc urna, suscipit at</li>
						<li>Cras at magna turpis. Vivamus</li>
					</ul>
				</li>
			</ul>

			<h3>Nested list</h3>

			<ol>
				<li>Lorem ipsum dolor sit amet

					<ul>
						<li>Aliquam fringilla massa lacus, at ornare</li>
						<li>Aliquam facilisis erat vitae metus</li>
					</ul>
				</li>
				<li>Consectetur adipisicing elit

					<ul>
						<li>Pellentesque habitant morbi tristique senectus</li>
						<li>Sed magna nisl, porta id</li>
					</ul>
				</li>
			</ol>

			<h3>Definition list</h3>

			<dl>
				<dt>Apple</dt>
				<dd>Pomaceous fruit of plants of the genus Malus in the family Rosaceae.</dd>

				<dt>Orange</dt>
				<dd>The fruit of an evergreen tree of the genus Citrus.</dd>

				<dt>Peer</dt>
				<dd>The fruit of the genus Pyrus tree.</dd>
			</dl>

			<h3>Link list</h3>

			<ul>
				<li><a href="http://500px.com/photo/16161417">Autumn baby</a></li>
				<li><a href="http://500px.com/photo/16158697">Loving it!</a></li>
				<li><a href="http://500px.com/photo/16153493">Living statue</a></li>
				<li><a href="http://500px.com/photo/16153891">An old man</a></li>
			</ul>

			<hr />

			<h2 id="tags">Tags</h2>

			<p>I am <a href="http://studiodumbar.com">the a tag</a> example<br />
				I am the <abbr title="abbreviation">abbr</abbr> tag example<br />
				I am <b>the b tag</b> example<br />
				I am <cite>the cite tag</cite> example<br />
				I am <del>the del tag</del> example<br />
				I am <dfn>the dfn tag</dfn> example<br />
				I am <em>the em tag</em> example<br />
				I am <i>the i tag</i> example<br />
				I am <ins>the ins tag</ins> example<br />
				I am <mark>the mark tag</mark> example<br />
				I am <small>the small tag</small> example<br />
				I am <span>the span tag</span> example<br />
				I am <strong>the strong tag</strong> example<br />
				I am <sub>the sub tag</sub> example<br />
				I am <sup>the sup tag</sup> example<br />
				I am <var>the var tag</var> example<br />
				I am <q>the q tag <q>inside</q> a q tag</q> example<br />
				I am <code>the code tag</code> example<br />
				I am <kbd>the kbd (or HTML Keyboard Input Element) tag</kbd> example
			</p>

			<hr />

			<h2 id="buttons" class="BetaHeading">Button</h2>

			<p>
				<input type="submit" name="submit" value="Submit button" class="Button"/>
				<input type="button" name="submit" value="Input button" class="Button"/>
				<button class="Button">Button button</button>
				<a href="#" class="Button Button--primary" role="button">Anchor button (primary)</a>
			</p>

			<p><input type="submit" name="submit" value="Submit button" class="Button"/></p>
			<p><input type="button" name="submit" value="Input button (primary)" class="Button Button--primary"/></p>

			<p><input type="submit" name="submit" value="Small button" class="Button Button--small"/></p>
			<p><input type="submit" name="submit" value="Large button" class="Button Button--large"/></p>

			<p>
				<button class="Button Button--primary Button--full">Button button (primary, full)</button>
				<a href="#" class="Button Button--full" role="button">Anchor button (full)</a>
			</p>

			<p><button class="Button Button--primary is-disabled">Button button (primary, disabled)</button></p>
			<p class="u-spaceTrailerM"><a href="#" class="Button is-disabled" role="button">Anchor button (disabled)</a></p>

		</div>

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

//DEV
$ = jQuery;

if (!window.console) console = {log: function() {}};

function c(){
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

jQuery(function($){

	//Add custom top bar links
	function addLink(currentLink, newLinkText, newLinkHref){
		var newLink = $('<a>').text(newLinkText).attr('href', newLinkHref);
		currentLink.after('&nbsp;&nbsp;|&nbsp;&nbsp;', newLink);
		return newLink;
	}
	var newLink = addLink($('.branding-right a'), 'COLLEGE', 'http://www.college.harvard.edu/');
	newLink = addLink(newLink, 'GSAS', 'http://www.gsas.harvard.edu/');
	newLink = addLink(newLink, 'SEAS', 'http://www.seas.harvard.edu/');
	newLink = addLink(newLink, 'DCE', 'http://www.dce.harvard.edu/');
	newLink = addLink(newLink, 'ATHLETICS', 'http://www.gocrimson.com/');

	//Clamp
	var feedBlocks = $('.page-home #content-panels .region-content-first .block, .page-home #content-panels .region-content-second .block');
	feedBlocks.each(function(){
		$t = $(this);
		var blockHeight = $t.height();
		var blockY = $t.offset().top;

		var p;
		$t.find('p').each(function(){ //Since the WYSIWG can produce empty <p> tags, make sure we aren't selecting an empty one at the end
			$t2 = $(this);
			if($t2.text().trim().length){
				p = $t2;
			}
		});

		var pY = p.offset().top;
		var pHeight = p.height();
		var heightRemaining = blockHeight - (pY - blockY);
		if($t.find('.link-count-node-readmore').length > 0) heightRemaining -= 23; //save space for Read More link if it exists

		// c($t, blockHeight, pY, blockY, pHeight, heightRemaining);
		if(pHeight > heightRemaining){
			$clamp(p[0], {clamp: heightRemaining + 'px', useNativeClamp: false});
		}

	});

	

});
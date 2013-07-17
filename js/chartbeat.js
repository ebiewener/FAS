
var _sf_startpt=(new Date()).getTime();

var _sf_async_config={};
/** CONFIGURATION START **/
_sf_async_config.uid = 2327;
_sf_async_config.domain = 'hwpi.harvard.edu';
_sf_async_config.useCanonical = true;
_sf_async_config.sections = 'Change this to your Section name';  //CHANGE THIS
_sf_async_config.authors = 'Change this to your Author name';    //CHANGE THIS
/** CONFIGURATION END **/
(function(){
	function loadChartbeat() {
		window._sf_endpt=(new Date()).getTime();
		var e = document.createElement('script');
		e.setAttribute('language', 'javascript');
		e.setAttribute('type', 'text/javascript');
		e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
		document.body.appendChild(e);
	}
	var oldonload = window.onload;
	window.onload = (typeof window.onload != 'function') ?
		loadChartbeat : function() { oldonload(); loadChartbeat(); };
})();
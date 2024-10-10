window.indexAnimations = function(){
	var $excerpts = $('.excerpt');
		
window.prepareIndexAnimations = function(){
	var $content = $('#content-block'),
		$elements = $content
						.find('.excerpt:not(:first-of-type)>.row>h2, .excerpt>.row>p, .excerpt>.row>.button, .excerpt>.row>img');
	
	$elements.addClass('transparent');
};

	$(function domReady($) {
			prepareIndexAnimations();
		
			for(var i=1, max = $excerpts.length; i<max; i++){
				var $el = $excerpts.eq(i);
				$el.scrollspy({
				
				min: $el.offset().top - ($(window).height()/2),
				max: $el.offset().top + $(this).height(),
				onEnter: function onEnter(element) {
						if (element.classList.contains('alt')){
							$(element).find('h2, p, .button').removeClass('transparent').addClass('animated bounceInLeft');
						} else {
							$(element).find('h2, p, .button').removeClass('transparent').addClass('animated bounceInRight');
						}
						setTimeout(function(){$(element).find('img').removeClass('transparent').addClass('animated bounceInDown');}, 500);
					}
				});
			}			
	});
};

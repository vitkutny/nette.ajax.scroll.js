(function (window, $) {
	$.nette.ext('scroll', {
		success: function (payload) {
			var offset = $(window.location.hash || this.target(payload)).offset();
			if (offset) {
				$(this.selector).bind(this.events, function (event) {
					event.preventDefault();
				});
				var that = this;
				$(this.selector).stop().animate({
					scrollTop: offset.top,
					scrollLeft: offset.left
				}, this.speed, function () {
					$(that.selector).unbind(that.events);
				});
			}
		}
	}, {
		speed: 'normal',
		selector: 'html, body',
		events: 'scroll mousedown DOMMouseScroll mousewheel keyup',
		target: function (payload) {
			return payload.snippets && '#' + Object.keys(payload.snippets).shift();
		}
	});
})(window, window.jQuery);

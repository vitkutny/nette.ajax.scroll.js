(function (window, $) {
	$.nette.ext('scroll', {
		success: function () {
			var offset;
			if (offset = $(window.location.hash).offset()) {
				var that = this;
				this.element.on(this.stopEvents, function () {
					that.element.stop();
				});
				this.element.stop().animate({
					scrollTop: offset.top,
					scrollLeft: offset.left
				}, this.speed, function () {
					that.element.off(that.stopEvents);
				});
			}
		}
	}, {
		speed: 'normal',
		element: $('html, body'),
		stopEvents: 'scroll.stop mousedown.stop wheel.stop DOMMouseScroll.stop mousewheel.stop keyup.stop touchmove.stop',
	});
})(window, window.jQuery);

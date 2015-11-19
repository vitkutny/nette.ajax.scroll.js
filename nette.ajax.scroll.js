(function ($, location, undefined) {
	$.nette.ext('scroll', {
		success: function () {
			var offset;
			if (offset = $(location.hash).offset()) {
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
		speed: undefined,
		element: $('html, body'),
		stopEvents: 'scroll.stop mousedown.stop wheel.stop DOMMouseScroll.stop mousewheel.stop keyup.stop touchmove.stop',
	});
})(window.jQuery, window.location, window.undefined);

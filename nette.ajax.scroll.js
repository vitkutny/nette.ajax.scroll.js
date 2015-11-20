(function ($, document, location, undefined) {
	$.nette.ext('scroll', {
		success: function () {
			var position;
			var container = $(this.container).last();
			if (position = container.find(location.hash).position()) {
				container.on(this.stopEvents, function () {
					container.stop();
				});
				var that = this;
				container.stop().animate({
					scrollTop: position.top,
					scrollLeft: position.left
				}, this.speed, function () {
					container.off(that.stopEvents);
				});
			}
		}
	}, {
		speed: undefined,
		container: document.body,
		stopEvents: 'scroll.stop mousedown.stop wheel.stop DOMMouseScroll.stop mousewheel.stop keyup.stop touchmove.stop',
	});
})(window.jQuery, window.document, window.location, window.undefined);

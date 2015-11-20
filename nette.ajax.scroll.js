(function ($, document, location, undefined) {
	$.nette.ext('scroll', {
		success: function () {
			var container = $(this.container).last();
			var element = container.find(location.hash).get(0);
			if (element) {
				container.on(this.stopEvents, function () {
					container.stop();
				});
				var clientRect = element.getBoundingClientRect();
				var that = this;
				container.stop().animate({
					scrollTop: container.scrollTop() + clientRect.top,
					scrollLeft: container.scrollLeft() + clientRect.left
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

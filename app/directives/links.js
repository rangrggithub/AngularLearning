(function() {
	var linkDemo = function () {
		return {
			restrict: 'A',
			link: function(scope, ele, attr) {
				ele.on('click', function() {
					ele.html('You Clicked Me');
				});
				ele.on('mouseenter', function() {
					ele.css({
						'background-color': 'yellow',
						'cursor': 'pointer',
						'font-weight': 'bold'
					});
				});
				ele.on('mouseleave', function() {
					ele.css('background-color', 'white');
				});
			}
		};
	};
	
	angular.module('app')
		.directive('linkDemo', linkDemo);
	
}());
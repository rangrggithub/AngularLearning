(function() {
	angular.module('app')
		.directive('isolateScopeWithObject', function() {
		return {
			scope: {
				datasource: '='
			},
			template: 'Name: {{datasource.name}} Street: {{datasource.street}}' + 
			'<br/><button ng-click="datasource.name = \'Ran Gurung\'">' + 'Change</button>'
		};
	});
	
}());
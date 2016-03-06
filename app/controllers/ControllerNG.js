(function(){
	
	function ControllerNG($scope){
		
		$scope.user = {
			name: 'David',
			street: '208 Hyde park CT'
		};
	
		$scope.users = [
			{
				name: 'David',
				street: '208 Hyde park CT',
				age: 25,
				url: 'index.html'
			},
			{
				name: 'Tina',
				street: '1100 Weston Park Way',
				age: 23,
				url: 'index.html'
			},
			{
				name: 'Messi',
				street: '3120 Park Road',
				age: 27,
				url: 'index.html'
			},
			{
				name: 'Ryan',
				street: '300 New Millenium Way',
				age: 40,
				url: 'index.html'
			},
			{
				name: 'Kajal',
				street: '1111 Polaris Park way',
				age: 24,
				url: 'index.html'
			}
		];
		
		var counter = 0;
		//$scope.tasks = [{title: 'Task 1'}];
		$scope.addUser = function(name) {
			console.log(name);
			counter++;
			$scope.users.push({
				name: (name) ? name : 'New User' + counter,
				street: counter + ' Radcliffe Drive',
				age: counter
			});
		};
	
		$scope.changeData = function() {
			counter++;
			$scope.user = {
				name: 'James',
				street: counter + ' Radcliffe Drive'
			};
		};
		
	};
	
	angular
	.module('app')
	.controller('ControllerNG', [
		'$scope',
	ControllerNG]);
}());

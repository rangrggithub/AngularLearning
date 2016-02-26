(function(){
	var OrdersController = function($scope, $routeParams, CustomersFactory){
		var customerId = $routeParams.customerId;
		$scope.customer = null;
		
		function init(){
			CustomersFactory.getCustomer(customerId)
				.success(function(customer) {
				$scope.customer = customer;
			})
				.error(function(data, status, headers, config) {
				// Handle error
			});
			
			//Search the customers for customeId
		//	$scope.customer = CustomersFactory.getCustomer(customerId);
		}
		
		init();
	};
	
	angular
	.module('app')
	.controller('OrdersController', [
		'$scope',
		'$routeParams',
		'CustomersFactory',
	OrdersController]);
}());
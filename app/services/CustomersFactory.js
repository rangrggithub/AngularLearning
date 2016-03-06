(function(){
	var CustomersFactory = function($http){
		
		var factory= {};
		factory.getCustomers = function(){
		//	return customers;
			return $http.get('/customers');
		}
		
		
		factory.getCustomer = function(customerId){
			return $http.get('/customers/' + customerId);
		
		}
		
		factory.getOrders = function(){
			//return orders
			return $http.get('/orders');
		}
		
		factory.deleteCustomer = function(customerId) {
			return $http.delete('/customers/' + customerId);
		}
		return factory;
	};
	
		
	
	angular.module('app')
		.factory('CustomersFactory', [
		'$http',
		CustomersFactory]);
	
}());
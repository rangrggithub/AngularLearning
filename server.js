var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function (req, res){
	var customerId = parseInt(req.params.id);
	var data = {};
	for(var i = 0, len = customers.length; i < len; i++){
		if(customers[i].id === customerId){
			data = customers[i];
			break;
		}
	}
	res.json(data);
});

app.get('/customers', function (req, res){
	res.json(customers);
//	res.json(500, {error: 'An error has occured!'});
});

app.get('/orders', function (req, res){
	var orders = [];
	for(var i=0, len=customers.length; i<len; i++) {
		if(customers[i].orders) {
			for(var j=0, ordersLen=customers[i].orders.length; j<ordersLen; j++) {
				orders.push(customers[i].orders[j]);
			}
		}
	}
	res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
	var customerId = parseInt(req.params.id);
	var data = { status: true };
	for (var i=0, len=customers.length; i<len; i++) {
		if (customers[i].id === customerId) {
			customers.splice(i,1);
			data = { status: true};
			break;
		}
	}
	res.json(data);
});

app.listen(3000);

console.log('Express listening on port 3000');

var customers = [
			{
				id: 1,
				joined: '2000-12-02',
				name: 'John',
				city: 'SanDiego',
				state: 'CA',
				orderTotal: 99.997,
				orders: [
					{
						id: 1,
						product: 'Shoes',
						total: 9.9956
					}]
			},
			{
				id: 2,
				joined: '2005-11-02',
				name: 'Shyam',
				city: 'Dallas',
				state: 'TX',
				orderTotal: 69.197,
				orders: [
					{
						id: 2,
						product: 'T-Shirt',
						total: 17.9356
					},
					{
						id: 3,
						product: 'Pants',
						total: 37.9356
					}
				]
			},
			{
				id: 3,
				joined: '2010-01-12',
				name: 'Jolie',
				city: 'NewYork',
				state: 'NY',
				orderTotal: 40.597,
				orders: [
					{
						id: 3,
						product: 'Shorts',
						total: 13.9956
					}]
			},
			{
				id: 4,
				joined: '2016-01-05',
				name: 'Rojan',
				city: 'Harrisburg',
				state: 'PA',
				orderTotal: 35.337,
				orders: [
					{
						id: 4,
						product: 'Soccer Ball',
						total: 5.8956
					}]
			},
			{
				id: 5,
				joined: '2013-08-05',
				name: 'Sarita',
				city: 'Harrisburg',
				state: 'PA',
				orderTotal: 105.87,
				orders: [
					{
						id: 5,
						product: 'Sandles',
						total: 85.8956
					}]
			},
			{
				id: 6,
				joined: '2016-03-01',
				name: 'Ran',
				city: 'Cary',
				state: 'NC',
				orderTotal: 105.87,
				orders: [
					{
						id: 6,
						product: 'Shampoo',
						total: 16.4956
					},
					{
						id: 7,
						product: 'Hair Dye',
						total: 6.956
					},
					{
						id: 8,
						product: 'Conditioner',
						total: 10.6956
					}
				]
			}
		];
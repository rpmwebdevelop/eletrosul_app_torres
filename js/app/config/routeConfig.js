app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "views/form.html"
	});
	$routeProvider.when("/distancia", {
		templateUrl: "views/distancia.html"
	});
});

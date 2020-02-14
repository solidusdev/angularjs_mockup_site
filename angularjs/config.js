app.config(function($routeProvider) {
    $routeProvider
		.when('/possible', {
			templateUrl: './possible.html',
			controller: "possible-controller"
		})
		.when('/impossible', {
			templateUrl: './impossible.html',
			controller: "impossible-controller"
		})
});
(function(angular) {
	
	config.$inject = ["$stateProvider", "$urlRouterProvider"];
	
	function config($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
			.state("home", {
				url: "/",
				controller: "HomeCtrl",
				templateUrl: "tpls/home.html"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				controller: "ViewController",
				templateUrl: "tpls/view.html"
			})
			.state("edit", {
				url: "/widgets/:widgetId/edit",
				controller: "EditController",
				templateUrl: "tpls/edit.html"
			})
		
	}
	
	angular.module("WidgetApp.Services").config(config);
	
})(angular);
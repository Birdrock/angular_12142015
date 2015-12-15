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
			.state("create", {
				url: "/widgets/create",
				controller: "EditController",
				templateUrl: "tpls/edit.html"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				controller: "ViewController",
				templateUrl: "tpls/view.html"
			})
			.state("edit", {
				url: "/widgets/edit/:widgetId",
				controller: "EditController",
				templateUrl: "tpls/edit.html"
			});
		
	}
	
	angular.module("WidgetApp.Services").config(config);
	
})(angular);
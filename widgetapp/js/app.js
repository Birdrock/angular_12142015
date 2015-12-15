(function(angular) {
	
	"use strict";
	
	angular.module("WidgetApp.Services", []);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);
	
	angular.module("WidgetApp", ["ui.router", "WidgetApp.Controllers"])
		.run(function($templateCache) {
			
			$templateCache.put("tpls/home.html", `
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Color</th>
							<th>Size</th>
							<th>Qty</th>
							<th>Action</th>
						</tr>
					<thead>
					<tr ng-repeat="widget in widgets">
						<td>{{widget.name}}</td>
						<td>{{widget.color}}</td>
						<td>{{widget.size}}</td>
						<td>{{widget.quantity}}</td>
						<td>
							<button ui-sref="edit({ widgetId: widget.id })">Edit</button>
							<button ui-sref="view({ widgetId: widget.id })">View</button>
						</td>
					</tr>
				</table>
			`);
			
			$templateCache.put("tpls/view.html", `
				<div>
					<p>
						ID: {{widget.id}}<br>
						Widget Name: {{widget.name}}<br>
						Widget Color: {{widget.color}}<br>
						Widget Size: {{widget.size}}<br>
						Widget Quantity: {{widget.quantity}}<br>
					</p>
				</div>
				<button ui-sref="edit({ widgetId: widget.id })">Edit</button>
				<button ui-sref="home()">Return to List</button>
			`);
			
			$templateCache.put("tpls/edit.html", `
				<form>
					<input>ID: {{widget.id}}</input>
					<input>Widget Name: {{widget.name}}</input>
					<input>Widget Color: {{widget.color}}</input>
					<input>Widget Size: {{widget.size}}</input
					<input>Widget Quantity: {{widget.quantity}}</input>
				</form>
				<button ui-sref="home()">Return to List</button>
			`);
			
		});
	
})(angular);
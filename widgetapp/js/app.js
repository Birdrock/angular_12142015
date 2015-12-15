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
					<div>
						<div><label>Name: <input ng-model="widget.name"></label></div>
						<div><label>color: <input ng-model="widget.color"></label></div>
						<div><label>Size: <input ng-model="widget.size"></label></div>
						<div><label>Quantity: <input ng-model="widget.quantity"></label></div>
						<div><label>Name: <input ng-model="widget.name"></label></div>
					</div>
					<button>Save</button>
					<button>Edit</button>
					<button ui-sref="home()">Return to List</button>
				</form>
			`);
			
		});
	
})(angular);
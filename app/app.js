(function() {
	"use strict";

	// app
	angular
		.module("app", ["common"])
		.controller("Todo", Todo)
		.run(runApp)
		.value("model", {
			"user": "Vitaliy",
			"userPhoto": "images/VZ.jpg"
		});

	function Todo(model, todoService) {
		let $ctrl = this;

		$ctrl.todo = model;

		Object.assign($ctrl, todoService);

		$ctrl.showComplete = true; 
	}

	function runApp($http, model) {
		$http
			.get("data/todo.json")
			.then(response => model.items = response.data);
	}

	// bootstrap app
	angular.element(document).ready(function() {
		angular.bootstrap(document, ["app"]);
	});

})();
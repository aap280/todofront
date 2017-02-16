'use strict';

/**
 * @ngdoc service
 * @name todofrontApp.todo
 * @description
 * # todo
 * Service in the todofrontApp.
 */
 //NOt sure about how the ones that require an id to work are gonna work
angular.module('todofrontApp')
	.config(['$httpProvider', function ($httpProvider) {
	  // Reset headers to avoid OPTIONS request (aka preflight)
	  $httpProvider.defaults.headers.common = {};
	  $httpProvider.defaults.headers.post = {};
	  $httpProvider.defaults.headers.put = {};
	  $httpProvider.defaults.headers.patch = {};
	}])
	.service('todoservice', function ($http, $resource) {
		return{
			getAll:function(callback){
				var url = "http://localhost:4000/todo";
				$resource(url).query({},{is_array: true},callback);
			},
			create:function(item,callback){
				var request = $http({
					method: "POST",
					headers: {"Content-Type":"application/json; charset=UTF-8"},
					url: "http://localhost:4000/todo",
					data: item
					});
				return(request.then(callback));
			
			},
			updateStatus:function(item,callback){
				var request = $http({
	              method: "PUT",
	              headers: {"Content-Type":"application/json; charset=UTF-8"},
	              url: "http://localhost:4000/todo/" + item._id,
	              data: {"done": item.done}
	            });
	    		return(request.then(callback));

			},
			updateItem:function(item, callback){
				var request = $http({
					method: 'PUT',
					headers: {"Content-Type":"application/json; charset=UTF-8"},
					url: "http://localhost:4000/todo/" + item._id,
	              	data: {"name": item.name}
				})
			},
			delete: function(item,callback){
				var request = $http({
				  method: "delete",
				  url: "http://localhost:4000/todo/" + item._id,
				  data: item
				});
			return(request.then(callback));
			}
		};
	});

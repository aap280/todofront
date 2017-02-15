'use strict';

/**
 * @ngdoc function
 * @name todofrontApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todofrontApp
 */
angular.module('todofrontApp')
  .controller('todoCtrl', function ($scope, todoservice) {

  	$scope.items = [];


  	$scope.loadData = function (){
    todoservice.getAll(function(data,err){
    	if(err){
    		console.log(err);
    	}
      $scope.items = data;
    });
  	};
  	//initial load
  	$scope.loadData();

  	$scope.addItem = function (addMe){
        $scope.errortext = "";
        if(!$scope.isUnique(addMe)){
          $scope.errortext = "Duplicate Task";
        }
        else{
          todoservice.create({"name":addMe},function(data,err){
          if(err){
            console.log(err);
          }
        });
  		};
      $scope.loadData();
    
  	};
    $scope.updateStatus = function (x){
      todoservice.updateStatus(x, function(data,err){
        if(err){
          console.log(err);
        }
      },2500);
      $scope.loadData();
    };

    $scope.isUnique = function(item){
      var x;
      var y;
      for(x = 0; x < $scope.items.length; x++){
          y = $scope.items[x];
          if(y.name == item){
            return false;
          }
        }
      return true;
    }

  	$scope.removeItem = function (x){
  		todoservice.delete(x, function(data,err){
  			if(err){
  				console.log(err);
  			}
  			//$scope.items.append();
  		},2500);

    $scope.loadData();
  	};

    $scope.myEnter = function(keyEvent, x) {
    if (keyEvent.which === 13) {
      $scope.addItem(x);
    }
    } 

    $scope.myEnterEdit = function(keyEvent, x, newName) {
    if (keyEvent.which === 13) {
      $scope.errortext = "";
      todoservice.updateItem(x, newName, function(data,err) {
        if(err){
          console.log(err);
        }
      },2500);
      $scope.loadData();
    }
    }

    $scope.editItem = function(x, newName) {
      $scope.errortext = "";
      if(!$scope.isUnique(newName)){
        $scope.errortext = "Duplicate Task";
      }
      else{
      todoservice.updateItem(x, newName, function(data,err) {
        if(err){
          console.log(err);
        }
      },2500);
      }
      $scope.loadData();
    };


  });

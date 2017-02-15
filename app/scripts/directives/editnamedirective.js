'use strict';

/**
 * @ngdoc directive
 * @name todofrontApp.directive:editNameDirective
 * @description
 * # editNameDirective
 */
angular.module('todofrontApp')
  .directive("editNameDirective", function() {
    return {
        restrict: 'E',
        scope: { value : '='},
        template: '<span ng-click = "edit()" ng-bind="value"></span><input ng-model="value" ng-blur = "blurIt()"></input>',
        link: function ($scope, element, attrs) {
          //reference the input element
          var inputElement = angular.element(element.children()[1]);

          //so we can stlye
          element.addClass('edit-name-directive');

          //not initially editing so false
          $scope.editing = false;

          //ng-click handler to activate edit-in-place
          $scope.edit = function(){
            $scope.editing = true;

            //control display through a class on directive itself
            element.addClass('active');

            //WHAT IS FOCUSING AN ELEMENT BRUNO
            // angular.element() provides a chainable array
            //reference first element
            inputElement[0].focus();
          };

          //done editing when leave input
          $scope.blurIt = function() {
            $scope.editing = false;
            element.removeClass('active');
          };
      }
  };
});


// angular.module('todofrontApp')
//   .directive("editNameDirective", function() {
//     return {
//         restrict: 'E',
//         scope: { name : '='},
//         template: '<span ng-click = "edit()" ng-bind="name"></span><input ng-model="name"></input>',
//         link: function ($scope, element, attrs) {
//           //reference the input element
//           var inputElement = angular.element(element.children()[1]);

//           //so we can stlye
//           element.addClass('edit-in-place');

//           //not initially editing so false
//           $scope.editing = false;

//           //ng-click handler to activate edit-in-place
//           $scope.edit = function(){
//             $scope.editing = true;

//             //control display through a class on directive itself
//             element.addClass('active');

//             //WHAT IS FOCUSING AN ELEMENT BRUNO
//             // angular.element() provides a chainable array
//             //reference first element
//             inputElement[0].focus();
//           };

//           //done editing when leave input
//           inputElement.prop( 'onblur', function() {
//             $scope.editing = false;
//             element.removeClass('active');
//           });
//       }
//   };
// });



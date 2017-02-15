'use strict';

/**
 * @ngdoc overview
 * @name todofrontApp
 * @description
 * # todofrontApp
 *
 * Main module of the application.
 */
angular
  .module('todofrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todo.html',
        controller: 'todoCtrl',
        controllerAs: 'todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

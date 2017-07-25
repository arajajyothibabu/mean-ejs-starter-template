/**
 * Created by jyothi on 25/7/17.
 */
(function() {
    'use strict';

    var sampleApp = angular.module('sampleApp', ['ngRoute', 'ngMaterial']);

    // configure our routes
    sampleApp.config(function($routeProvider) {
        $routeProvider

        // route for the home page
            .when('/', {
                templateUrl : 'pages/index.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/users', {
                templateUrl : 'pages/users.html',
                controller  : 'usersController'
            });
    });

    // create the controller and inject Angular's $scope
    sampleApp.controller('mainController', function($scope) {
        $scope.currentNavItem = 'Home';
        $scope.message = 'Everyone come and see how good I look!';
    });

    sampleApp.controller('usersController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

})();
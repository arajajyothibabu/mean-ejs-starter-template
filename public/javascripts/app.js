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

    sampleApp.controller('searchController', function($scope, $timeout, $q, $log) {

        var self = this;

        self.simulateQuery = false;
        self.isDisabled    = false;

        self.users  = [];
        self.AutoCompleteUsers  = [];
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        self.getAllUsers = getAllUsers;

        /**
         * Getting all matched users
         * @param user
         */
        function getAllUsers(user) {
            alert("Sorry! You'll need to create a Constitution for " + user + " first!");
            //TODO:
        }

        /**
         * Search for query Autocomplete
         * @param query
         */
        function querySearch (query) {
            //TODO:
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

    });

})();
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

    sampleApp.controller('searchController', function($scope, $http, $q, $log) {

        var self = this;

        self.simulateQuery = false;
        self.isDisabled    = false;

        self.users  = [];
        self.response = [];
        self.autoCompleteUsers  = [];
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        self.getAllUsers = getAllUsers;

        /**
         * Getting all matched users
         * @param user
         */
        function getAllUsers(user) {
            self.users = self.response; //showing all users of the search
        }

        /**
         * Search for query Autocomplete
         * @param query
         */
        function querySearch (query) {
            $http({
                method: 'GET',
                url: "/v1/api/users/search?q=" + query
            }).then(function successCallback(response) {
                self.response = response.data || [];
                self.autoCompleteUsers  = self.response.map(function (item) {
                    return {
                        value: item._id,
                        display: item.topic
                    };
                });
            },function errorCallback(response) {
                $scope.error = response.statusText; //TODO:
            });
        }

        function searchTextChange(text) {
            querySearch(text);
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            var indexOfUser = self.response.findIndex(function (dataItem) {
                return dataItem._id === item.value;
            });
            self.users = [ self.response[indexOfUser] ];
            $log.info('Item changed to ' + JSON.stringify(item));
            $log.info("Users ", self.users);
        }

    });

})();
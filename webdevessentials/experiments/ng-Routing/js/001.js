﻿var app = angular.module("HomeApp", ['ngRoute']);

app.controller("UserLogin", function ($scope, UserService) {
    $scope.currentUser = null;
    $scope.hello = "Hello to my home page";
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;
        //alert(username + password);    
        $scope.currentUser = UserService.login(username, password);
        // alert($scope.currentUser);        
    };    
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'embed/home.html'
           
        }).
        when('/profile/:username', {
            templateUrl: 'embed/profile.html'           
        }).
    otherwise({
        redirectTo: 'embed/home.html'
    });
}]);

app.factory("UserService", function () {
    var currentUser = null;
    var dummyUsers = [
        { username: 'renu', password: "renu", email: 'pri@gmail.com' },
    { username: 'pri', password: 'pri', email: 'pri@gmail.com' },
    { username: 'nids', password: 'nids', email: 'pri@gmail.com' },
    { username: 'neha', password: 'neha', email: 'pri@gmail.com' }];

    var login = function (username, password) {
        for (var i in dummyUsers) {
            if (dummyUsers[i].username == username && dummyUsers[i].password == password) {
                currentUser = dummyUsers[i];
                return dummyUsers[i];
            }
        }
        return null;
    }

    var getCurrentUser = function () {
        return currentUser;
    }
   
    return {
        login: login,
        getCurrentUser: getCurrentUser
        
    }
});


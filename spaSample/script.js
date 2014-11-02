var sampleApp = angular.module("sampleApp", ["ngRoute"]);

sampleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        .when("/about", {
            templateUrl: 'about.html',
            controller: 'aboutController'
        })
        .when("/contact", {
            templateUrl: 'contact.html',
            controller: 'contactController'
        });
});

sampleApp.controller("homeController", function ($scope) {
    $scope.message = "This is the fucking 'home' page";
});

sampleApp.controller("aboutController", function ($scope) {
    $scope.message = "Another motha fucka 'about' page";
});

sampleApp.controller("contactController", function ($scope) {
    $scope.message = "Shit! What's about 'contact' page?";
});
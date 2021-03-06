﻿App.controller('CustomerCtrl', function ($scope, $http) {

    $scope.dataPool = [];
    $scope.records = [];

    $http.get("http://localhost:55516/api/Customers").then(function (response) {
        $scope.dataPool = response.data;
        $scope.records = response.data;
    
    });
    
});

var counterThisOne = 0,
    counterNotThis = 0;
App.filter('idFilter', function () {
    return function (input, searchParameter) {

        if (searchParameter === "" | searchParameter === null | searchParameter === " " | searchParameter === undefined) {
            return input;
        } else {

            var out = [];

            for (var i = 0; i < input.length; i++) {

                searchParameter = searchParameter.toString().toLowerCase();
                var record = input[i].CustomerID.toString().toLowerCase();

                if (record.includes(searchParameter)) {
                    out.push(input[i]);
                }

            }

            return out;
        }

    };
});


App.controller('OrderCtrl', function ($scope, $http) {

    $http.get("http://localhost:55516/api/Orders").then(function (response) {
        $scope.records = response.data;
    });
});
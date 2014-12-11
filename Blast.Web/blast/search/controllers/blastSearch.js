var module = angular.module('blast.search.controllers');

module.controller('BlastSearchCtrl', function ($scope, $rootScope, $http, $state, $timeout) {

    $scope.search = {
        query: null,
        email: null,
        blastAlgorithm: 0,
        maxTargetSequences: 50,
        expectThreshold: 4,
        diversityAlgorithm: 0,
        diversityRatio: 80,
        databases: [0,1,2,3,4]
    };

    $scope.beginSearch = function () {

        $scope.loading = true;

        $http.post('api/Search/BeginSearch', $scope.search, { headers: { 'Content-Type': 'application/json; charset=utf-8' } }).success(function (response) {

            $scope.loading = false;
            $scope.success = true;

            alert();

        }).error(function (err, status) {
            $scope.loading = false;
            $scope.hasError = true;
        });
    };
});

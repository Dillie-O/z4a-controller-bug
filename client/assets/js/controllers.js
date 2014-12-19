angular.module('application')
.controller('NewsController', ['$scope', '$stateParams', '$state', '$http', function ($scope, $stateParams, $state, $http) {
   $scope.newsTime = 'Not retrieved yet.';
   $scope.getTime = function () {

   $scope.newsTime ="Sometime now...";
};
}
]);

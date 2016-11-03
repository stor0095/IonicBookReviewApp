angular.module('starter.services', ['ionic'])


.controller('fictionCtrl', ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {

        $scope.categoriesID = $stateParams.categoriesID;
        $scope.book = {};

        Items.getAll($scope.categoriesID)
            .then(function (res) {
                $scope.categoryTitles = res.data.books;
                $scope.book = $scope.categoryTitles.filter(x => x.cat_id[0] == [$stateParams.categoriesID]);
            }, function (res) {
                // error
                alert("Unable to retrieve data");
            });
}])
    .controller("DetailsCtrl", ["$scope", "$stateParams", "Items", function ($scope, $stateParams, Items) {
        $scope.bookDetails = {};
        $scope.id = $stateParams.id;
        Items.getOne($scope.bookDetails)
            .then(function (res) {
                var categoryTitles = res.data.books;
                categoryTitles.forEach(function (i) {
                    if (i._id == $stateParams.id) {
                        $scope.bookDetails = i;
                    }
                });
            }, function (res) {
                // error
                alert("Unable to retrieve data");
            });

        // Ionic ratings for books
        $scope.ratingsObject = {
            iconOn: 'ion-ios-star',
            iconOff: 'ion-ios-star-outline',
            iconOnColor: '#ffd700',
            iconOffColor: '#ffd700',
            rating: localStorage.getItem($scope.id),
            minRating: 0,
            callback: function (rating) {
                $scope.ratingsCallback(rating);
            }
        };
        // Store rating into local storage
        $scope.ratingsCallback = function (rating) {
            $scope.ratingsArray = [];
            $scope.addRating = function () {
                $scope.ratingsArray.push({
                    ratings: rating
                });
                localStorage.setItem($scope.id, rating);
            };
        };

        // Show more info button
        $scope.showMore = function () {
            $scope.moreInfo = !$scope.moreInfo;
            console.log("show more is firing");
        };
}]);
 
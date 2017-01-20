/* globals widgets */
widgets.controller("PhotoCtrl",
  ['$scope',
    function($scope){
      $scope.rawFeed = instagramResponse;
      $scope.images = $scope.rawFeed.data;
      $scope.showImage = function showImage(imageData) {
        imageData.visible = true;
      };
      $scope.hideImage = function hideImage(imageData) {
        imageData.visible = false;
      }
    }
  ]
)

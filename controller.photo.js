/* globals widgets */
widgets.controller("PhotoCtrl",
  ['$scope',
    function($scope){
      $scope.rawFeed = instagramResponse;
      $scope.images = $scope.rawFeed.data;

      $scope.showData = function showData(image) {
        image.visible = true;
      };

      $scope.hideData = function hideData(image) {
        image.visible = false;
      }

      $scope.getFilters = function getFilters(){
        var filters = {}
        for(var i = 0; i < images.length; i++){
          filters[images[i].filter] = ""
        }
        var filterArray = []
        for(var filter in filters){
          filterArray.push(filter)
        }
        return filterArray;
      };

      $scope.filters = getFilters();
    }
  ]
)

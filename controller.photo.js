/* globals widgets */
widgets.controller("PhotoCtrl",
  ['$scope',
    function($scope, $photoFilter){
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
        for(var i = 0; i < $scope.images.length; i++){
          filters[$scope.images[i].filter] = "";
        }
        var filterArray = [''];
        for(var filter in filters){
          filterArray.push(filter);
        }
        return filterArray;
      };

      $scope.filters = $scope.getFilters();

      $scope.logFilter = function(_this) {
        console.log(_this);
        console.log($scope.selectedFilter);
        $scope.selectedFilter = _this.selectedFilter;
      }
    }
  ]
)

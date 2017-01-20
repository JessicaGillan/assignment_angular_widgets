/* globals widgets */
widgets.controller("PhotoCtrl",
  ['$scope',
    function($scope, $photoFilter){
      $scope.rawFeed = instagramResponse;
      $scope.images = $scope.rawFeed.data;
      $scope.page = 0;
      $scope.start = 0 ;
      $scope.PAGE_LENGTH = 12;
      $scope.availImages = 0;

      $scope.nextPage = function nextPage(){
        if(!$scope.lastPage()) {
          $scope.page += 1;
          $scope.setStart();
        }
      }

      $scope.previousPage = function previousPage(){
        if(!($scope.page === 0)) {
          $scope.page -= 1;
          $scope.setStart();
        }
      }

      $scope.lastPage = function lastPage() {
        return !($scope.availImages.length > (($scope.page + 1) * $scope.PAGE_LENGTH));
      }

      $scope.setStart = function setStart(){
        $scope.start = $scope.page * $scope.PAGE_LENGTH;
      }

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

      $scope.getHashtags = function getHashtags(){
        var hashtags = {}
        for(var i = 0; i < $scope.images.length; i++){
          for(var h = 0; h < $scope.images[i].tags.length; h++){
            hashtags[$scope.images[i].tags[h]] = "";
          }
        }
        var hashtagArray = [''];
        for(var hashtag in hashtags){
          hashtagArray.push(hashtag);
        }
        return hashtagArray;
      };

      $scope.filters = $scope.getFilters();
      $scope.hashtags = $scope.getHashtags();
      $scope.filterFilter = "";

      $scope.setFilterFilter = function(filter) {
        $scope.filterFilter = filter;
      }

      $scope.setHashtagFilter = function(filter) {
        $scope.hashtagFilter = filter;
      }
    }
  ]
)

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

      $scope.pageCount = function pageCount() {
        return Math.ceil($scope.availImages.length / $scope.PAGE_LENGTH);
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

      $scope.getUniq = function getUniq(prop, initialBlank) {
        var items = {};
        for(var i = 0; i < $scope.images.length; i++){
          items[$scope.images[i][prop]] = "";
        }
        var itemArray = initialBlank ? [""] : [];
        for(var item in items){
          itemArray.push(item);
        }
        return itemArray;
      };

      $scope.getUsers = function() {
        var items = {};
        for(var i = 0; i < $scope.images.length; i++){
          items[$scope.images[i].user.username] = $scope.images[i].user;
          console.log(items);
        }
        var itemArray = [];
        for(var item in items){
          itemArray.push(items[item]);
        }
        return itemArray;
      };

      $scope.filters = $scope.getUniq('filter', true);
      $scope.hashtags = $scope.getHashtags();
      $scope.users = $scope.getUsers();
      $scope.filterSubset = "";

      $scope.setFilterSubset = function(filter) {
        $scope.filterSubset = filter;
      }

      $scope.setHashtagSubset = function(hashtags) {
        $scope.hashtagSubset = hashtags;
      }
    }
  ]
)

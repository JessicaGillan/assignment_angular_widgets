/* globals widgets */
widgets.controller("RestaurantCtrl",
  ['$scope',
    function($scope){
      $scope.restaurants = [];
      $scope.newRestaurant = function newRestaurant(){
        return {name: "", foodType: "", imgAddr: ""};
      };

      var transferAttr = function transferAttr(newRest, attr_arr) {
        console.log(newRest);
        for (var i = 0; i < attr_arr.length; i++) {
          newRest[attr_arr[i]] = $scope[attr_arr[i]];
          $scope[attr_arr[i]] = null;
        }
        console.log(newRest);
      };
      $scope.createRestaurant = function createRestaurant(){
        var newRest = $scope.newRestaurant()
        transferAttr(newRest, ['name', 'foodType', 'imgAddr']);
        $scope.restaurants.push(newRest);
      };

      $scope.removeRestaurant = function removeRestaurant(restaurant){
        for(var i = 0; i < $scope.restaurants.length; i++){
          if($scope.restaurants[i] === restaurant){
            $scope.restaurants.splice(i, 1);
            return
          }
        }
      };
    }
  ]
)

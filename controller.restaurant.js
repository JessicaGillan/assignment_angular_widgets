/* globals widgets */
widgets.controller("RestaurantCtrl",
  ['$scope',
    function($scope){
      $scope.restaurantOrder = 'type';
      $scope.restaurants = [{
        name: 'test1',
        type: "crappy",
        img: null
      },
      {
        name: 'test2',
        type: "better",
        img: null
      },
      {
        name: 'test3',
        type: "half decent",
        img: null
      }];
      $scope.newRestaurant = function newRestaurant(){
        return {name: "", type: "", imgAddr: ""};
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
        transferAttr(newRest, ['name', 'type', 'imgAddr']);
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

      $scope.sortRestaurants = function sortRestaurants(column){
        if($scope.restaurantOrder === column){
          $scope.direction = !$scope.direction
        } else {
          $scope.direction = false;
          $scope.restaurantOrder = column;
        }
      };
    }
  ]
)

Widgets.controller("restaurant",
  ['$scope',
    function($scope){
      $scope.restaurants = [];
      $scope.newRestaurant = function newRestaurant(){
        return {name: "", foodType: ""}
      }

      $scope.createRestaurant = function createRestaurant(){
        var newRest = $scope.newRestaurant()
        newRest.name = $scope.name;
        newRest.foodType = $scope.foodType;
        $scope.restaurants.push(newRest);
        $scope.name = null;
        $scope.foodType = null;
      }

      $scope.removeRestaurant = function removeRestaurant(restaurant){
        for(var i = 0; i < $scope.restaurants.length; i++){
          if($scope.restaurants[i] === restaurant){
            $scope.restaurants.splice(i, 1);
            return
          }
        }
      }
    }
  ]
)

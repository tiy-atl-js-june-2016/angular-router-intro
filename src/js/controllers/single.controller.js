function SingleController ($scope, $stateParams, $http, SERVER) {

  $scope.singleGif = {};

  init();

  function init () {

    $http.get(SERVER.URL + $stateParams.id).then( (res) => {
      $scope.singleGif = res.data;
    });

  }

}

SingleController.$inject = ['$scope', '$stateParams', '$http', 'SERVER'];
export { SingleController };
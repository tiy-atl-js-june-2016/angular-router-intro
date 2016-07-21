function HomeController ($scope, $http, SERVER) {

  $scope.gifs = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.gifs = res.data;
    });
  }

}

HomeController.$inject = ['$scope', '$http', 'SERVER'];
export { HomeController };
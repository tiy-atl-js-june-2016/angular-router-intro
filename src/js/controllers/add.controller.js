function AddController ($scope, $http, SERVER, $state) {

  $scope.addGif = (gif) => {
    $http.post(SERVER.URL, gif).then( (res) => {
      $state.go('home');
    });
  };

}

AddController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { AddController };
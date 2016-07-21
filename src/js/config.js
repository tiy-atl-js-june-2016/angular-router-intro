function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    });

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
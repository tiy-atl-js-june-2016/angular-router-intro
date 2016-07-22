function config ($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })
    .state('root.about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
    .state('root.single', {
      url: '/gif/:id',
      templateUrl: 'templates/single.tpl.html',
      controller: 'SingleController'
    });

  $urlRouterProvider.otherwise('/');

}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
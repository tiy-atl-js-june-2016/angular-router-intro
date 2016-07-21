function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: 'Hello Home State'
    })
    .state('about', {
      url: '/about',
      template: 'Hello About State'
    })
    .state('contact', {
      url: '/contact',
      template: 'Hello Contact State'
    });

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
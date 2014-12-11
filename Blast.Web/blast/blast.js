// Init Application
var blastApp = angular.module('blast', [
  'ui.router',
  'blast.core.directives',
  'blast.core.controllers',
  'blast.search.directives',
  'blast.search.controllers'
]);

// Init Modules
angular.module('blast.core.directives', []);
angular.module('blast.core.controllers', []);
angular.module('blast.search.directives', []);
angular.module('blast.search.controllers', []);

// Main Application Controller
blastApp.controller('ApplicationCtrl', ['$timeout', function ($timeout) {}]);

// Set Routes
blastApp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to search page
    $urlRouterProvider.otherwise("/search/general");

    $stateProvider
      .state('search', {
          url: "/search",
          abstract: true,
          templateUrl: 'blast/search/views/layouts/search-layout.html'
      })
      .state('search.general', {
          url: "/general",
          templateUrl: 'blast/search/views/general-search.html'
      });
});
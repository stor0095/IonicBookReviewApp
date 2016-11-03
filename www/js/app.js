// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.items','starter.controllers', 'starter.services', 'ionic-ratings'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.fiction', {
    url: '/fiction/:categoriesID',
    views: {
      'tab-fiction': {
        templateUrl: 'templates/tab-fiction.html',
        controller: 'fictionCtrl'
      }
    }
  })
  .state('tab.fiction-detail', {
      url: '/fiction/1/:id',
      views: {
        'tab-fiction': {
          templateUrl: 'templates/book-details.html',
          controller: 'DetailsCtrl'
        }
      }
    })

  .state('tab.nonfiction', {
      url: '/nonfiction/:categoriesID',
      views: {
        'tab-nonfiction': {
          templateUrl: 'templates/tab-nonfiction.html',
          controller: 'fictionCtrl'
        }
      }
    })
    .state('tab.nonfiction-detail', {
      url: '/nonfiction/2/:id',
      views: {
        'tab-nonfiction': {
          templateUrl: 'templates/book-details.html',
          controller: 'DetailsCtrl'
        }
      }
    })
    .state('tab.history', {
      url: '/history/:categoriesID',
      views: {
        'tab-history': {
          templateUrl: 'templates/tab-history.html',
          controller: 'fictionCtrl'
        }
      }
    })
    .state('tab.history-detail', {
      url: '/history/3/:id',
      views: {
        'tab-history': {
          templateUrl: 'templates/book-details.html',
          controller: 'DetailsCtrl'
        }
      }
    })
  .state('tab.science', {
    url: '/science/:categoriesID',
    views: {
      'tab-science': {
        templateUrl: 'templates/tab-science.html',
        controller: 'fictionCtrl'
      }
    }
  })
    .state('tab.science-detail', {
      url: '/science/4/:id',
      views: {
        'tab-science': {
          templateUrl: 'templates/book-details.html',
          controller: 'DetailsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/fiction/1');

});

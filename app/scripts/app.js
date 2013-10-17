'use strict';

var app = angular.module('waffleHaxApp', []);

app.config(function ($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'views/main.html'}).
    when('/day', {templateUrl: 'views/pmtslidergroup.html', controller: 'PmtGroupDayCtrl'}).
    when('/week', {templateUrl: 'views/pmtslidergroup.html', controller: 'PmtGroupWeekCtrl'}).
    when('/slider', {templateUrl: 'views/pmtslider.html', controller: 'PmtSliderCtrl'}).
    otherwise({redirectTo: '/'});
});
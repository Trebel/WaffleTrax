'use strict';

var app = angular.module('waffleHaxApp');

app.controller('PmtGroupDayCtrl', function ($scope, pmtFactory) {
  $scope.pmtList = pmtFactory.getPmts();
});

app.controller('PmtGroupWeekCtrl', function ($scope, pmtFactory) {
  $scope.pmtList = pmtFactory.getPmts();
});

app.controller('PmtSliderCtrl', function ($scope, pmtFactory) {
  $scope.pmtSlider = pmtFactory.getPmts()[0];
});

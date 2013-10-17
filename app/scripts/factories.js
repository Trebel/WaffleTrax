'use strict';

var app = angular.module('waffleHaxApp');

app.factory('pmtFactory', function() {
  return {
    getPmts: function() {
      return [
        {'pmtTitle': 'Non-Project Training', 'pmtId': 283112 , 'pmtType':'Training', 'hours': 4.25, 'selected': true} ,
        {'pmtTitle': 'Non-Project Admin', 'pmtId': 283772 , 'pmtType':'General Admin', 'hours': 3, 'selected': true} ,
        {'pmtTitle': 'Employee Development', 'pmtId': 393505 , 'pmtType':'Training', 'hours': 1.75, 'selected': true}
      ];
    }
  };
});
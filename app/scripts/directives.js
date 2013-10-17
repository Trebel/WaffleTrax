'use strict';

var app = angular.module('waffleHaxApp');

app.directive('pmtslider', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: { hours: '=', title: '=' },
    template: '<div class="row-fluid">' +
                '<div class="span2">' +
                  '<p >{{title}}</p>'+
                  '<div class="row-fluid">' +
                    '<div class="span2">' +
                      '<input type="text" class="slider" data-slider-range="true" data-slider-min="0" data-slider-max="10" data-slider-step=".25" data-slider-orientation="vertical" data-slider-selection="after" data-slider-tooltip="show">' +
                      '<div class="row-fluid">' +
                        '<div class="span2">' +
                          '<input type="text" ng-model="hours">' +
                        '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>',
    link: function(scope, element, attrs) {
      // initialize the slider value
      var sliderElement = angular.element(angular.element(angular.element(angular.element(element.children()[0]).children()[1]).children()[0]).children()[0]);
      
      var hoursElement = angular.element(angular.element(angular.element(angular.element(angular.element(angular.element(element.children()[0]).children()[1]).children()[0]).children()[1]).children()[0]).children()[0]);
      var hours = scope.hours;
      sliderElement.slider('setValue', hours);

      sliderElement.slider().on('slide', function(ev){
        scope.$apply(function() {
          scope.hours = ev.value;  
        })      
      });

      hoursElement.on('keyup change', function(){
        scope.$apply(function() {
          sliderElement.slider('setValue', scope.hours);
        })
        
      });
    }
  };
});
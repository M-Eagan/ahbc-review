"use strict";
// defining the controller
angular
  .module("App")
  .controller("HomeController", function(HomeService) {
    const $ctrl = this;
    
    // this function will initialize $ctrl.students to the data returned from the HTTP request
    function changes(response) {
      $ctrl.students = response.data;
    }

    // when the updateData method is called, it passes the parameter to HomeService.updateData and then calls the changes function
    $ctrl.updateData = (student) => {
      HomeService.updateData(student).then(changes);
    };

    // calls the HomeService.getData method and then calls the changes function
    HomeService.getData().then(changes);
    
    // when the deleteData method is called, it passes the parameter to HomeService.deleteData and then calls the changes function
    $ctrl.deleteData = (id) => {
      HomeService.deleteData(id).then(changes);
    };
    
    // when the postData method is called, it passes the parameter to HomeService.postData and then calls the changes function
    $ctrl.postData = (newStudent) => {
      HomeService.postData(newStudent).then(changes);
    };
  });
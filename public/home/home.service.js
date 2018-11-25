"use strict";
// defining the service
angular
  .module("App")
  .service("HomeService", function($http) { // $http must be injected to use HTTP requests
    const service = this;

    // this method is for doing a POST request
    service.postData = (newStudent) => {
      return $http({
        method: "POST",
        url: "/students",
        data: newStudent // this object comes from the controller and matches with the req.body object in routes.js
      });
    };

    // this method is for doing a PUT request
    service.updateData = (student) => {
      return $http({
        method: "PUT",
        url: `/students/${student.id}`, // student.id comes from the controller and matches with the req.params.id in routes.js
        data: student
      });
    };

    // this method is for doing a DELETE request
    service.deleteData = (id) => {
      return $http({
        method: "DELETE",
        url: `/students/${id}` // id comes from the controller and matches with the req.params.id in routes.js 
      });
    };

    // this method is for doing a GET request
    service.getData = () => {
      return $http({
        method: "GET",
        url: "/students"
      });
    };
  });
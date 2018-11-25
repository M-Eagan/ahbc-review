"use strict";
// defining the component
const home = {
  // this is the templateUrl file path
  templateUrl: "home/home.html",
  // this is the controller name
  controller: "HomeController"
};

angular.module("App").component("home", home);
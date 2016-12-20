class MyController {
  constructor(){
    this.model={isWorking:'why yes it is'};
  }
}

angular.module('myApp',[])
.controller('MyController', MyController);
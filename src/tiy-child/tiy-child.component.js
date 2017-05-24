angular
  .module('app')
  .component('tiyChild', {
    templateUrl: 'tiy-child/tiy-child.component.html',
    controller: [
      'jsonTest',
      (jsonTest) => {
        console.log(jsonTest.id);
        return {};
      }
    ],
    controllerAs: 'child',
    bindings: {
      complexThing: '<', // { list: [strings], id: number, o: {stuff} }
      listenToMe: '&',
      b: '<'
    }
  });

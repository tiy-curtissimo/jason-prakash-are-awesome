class HelloWorldController {
  constructor(jsonTest, $log) {
    this.jsonTest = jsonTest;
    this.$log = $log;

    this.$log.info('json-test id', this.jsonTest.id);

    this.complexThing = {
      list: [
        'curtis',
        'jason',
        'prakash'
      ]
    };
  }

  printEvent(value) {
    this.$log.info('Received the value', value);
    this.goodName = value;
  }

  getComplexThing() {
    return this.complexThing;
  }

  handleClick() {
    this.jsonTest
      .getIp() // { "ip": "12.12.12.12"" }
      .then(ip => this.goodName = ip)
      .catch(error => this.$log.error(error));
  }
}

angular
  .module('app')
  .component('tiyHelloWorld', {
    templateUrl: 'tiy-hello-world/tiy-hello-world.component.html',
    controller: [
      'jsonTest',
      '$log',
      (jsonTest, $log) => new HelloWorldController(jsonTest, $log)
    ],
    controllerAs: 'hello',
    transclude: true,
    bindings: {
      goodName: '@'
    }
  });

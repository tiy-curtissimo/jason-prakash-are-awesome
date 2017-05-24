class JsonTestService {
  constructor($http, $log) {
    this.id = Math.random();
    this.$http = $http;
    this.$log = $log;
  }

  getIp() {
    return this.$http
      .get('http://ip.jsontest.com')
      .then(xhr => xhr.data)
      .then(ipReport => ipReport.ip);
  }
}

angular
  .module('app')
  .factory('jsonTest', [
    '$http',
    '$log',
    (h, l) => new JsonTestService(h, l)
  ]);

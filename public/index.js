require('angular-material/angular-material.min.css');
require('angular');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');

import {processMatrixComponent} from './sb-process-matrix/process_matrix.js';
import { TaskComponent } from './sb-process-matrix/components/task.js';
import {DeliverablesService} from './common/deliverables.service.js';

class IndexController {
  constructor (sbDeliverables) {

    // dependencies
    this.sbDeliverables = sbDeliverables;

    // properties of vm
    this.deliverables = [];

    // init call
    this.sbDeliverables
        .fetchAll()
        .then( deliverables => this.deliverables = deliverables);
  }
}
IndexController.$inject = ['sbDeliverables'];

angular
    .module('theWholeApp', ['ngMaterial'])
    .factory('sbDeliverables', DeliverablesService)
    .component('sbProcessMatrix', processMatrixComponent)
    .component('sbTask', TaskComponent)
    .controller('IndexController', IndexController);
/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor () {
    console.log('ProcessMatrixController');
    this.taskActions = [{
      label: 'Todo',
      value: 0,
    }, {
      label: 'In progress',
      value: 50,
    }, {
      label: 'Done',
      value: 100,
    }];
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit () {
    console.log('input bindings are defined!', this.sbModel);
  }
}

export { ProcessMatrixController }
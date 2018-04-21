import { DeliverablesService } from '../../common/deliverables.service.js';

class TaskController {

	constructor($timeout, sbDeliverables) {
		this.$timeout = $timeout;
		this.sbDeliverables = sbDeliverables;
		this.taskError = false;
  }

  $onInit () {
    console.log('input bindings are defined!');
	}

	getStyle(task) {
		return {
			'background-color': task.color,
		};
	}

	updateProgress(task) {
		const taskId = task.id;
		this.taskError = false;
		const newProgess = this.progressUpdates;
		return this.sbDeliverables.changeTaskProgress(task, newProgess)
			.catch(() => {
				this.taskError = true;
				this.$timeout(() => {
					this.taskError = false;
				}, 5000)
			});
	}
}

TaskController.$inject = ['$timeout', 'sbDeliverables'];

export { TaskController }
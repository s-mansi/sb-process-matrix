import componentTemplate from './task.html';
import componentStyle from '../process_matrix.less';

import { TaskController } from './task.controller.js';

const bindings = {
  task: '<',
  taskActions: '<',
};

export const TaskComponent = {
  controller: TaskController,
  template: componentTemplate,
  bindings: bindings
};
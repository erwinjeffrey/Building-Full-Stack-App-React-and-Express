import { addNewTask, updateTask } from './server';

(async function() {
  await addNewTask({
    name: 'My task2',
    id: '12346'
  });

  await updateTask({
    id: '12346',
    name: 'My task - UPDATED!!!'
  });
})();

import AsyncStorage from '@react-native-async-storage/async-storage';

async function create(task) {
  const tasks = await AsyncStorage.getItem('@dr-tasks');
  const taskArray = JSON.parse(tasks ?? '[]');
  const newTasks = [...taskArray, task];

  await AsyncStorage.setItem('@dr-tasks', JSON.stringify(newTasks));
}

async function deleteTask(task) {
  const tasks = await AsyncStorage.getItem('@dr-tasks');
  const taskArray = JSON.parse(tasks ?? '[]');
  const newTasks = taskArray.filter(x => x != task);
  await AsyncStorage.setItem('@dr-tasks', JSON.stringify(newTasks));
}

async function getAll() {
  const tasks = await AsyncStorage.getItem('@dr-tasks');
  const taskArray = JSON.parse(tasks ?? '[]');
  return taskArray;
}

export default {
  create,
  deleteTask,
  getAll,
};

import React, { useEffect, useState } from 'react';
import DrModal from '@sb/components/DrModal';
import { Button, useDisclose } from 'native-base';
import taskService from '@sb/services/taskService';
import CreateTask from './components/CreateTask';
import TaskCard from './components/TaskCard';
import DrScreen from '@sb/components/DrScreen';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export default function CalendarScreen({ navigation }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [tasks, setTasks] = useState([]);
  const nav: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getTasks();
    });
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button mr={2} onPress={onOpen}>
          Add
        </Button>
      ),
    });
  }, [navigation]);

  const getTasks = async () => {
    const tasks = await taskService.getAll();
    setTasks(tasks);
  };

  const createTask = async (values: any) => {
    await taskService.create(values.task);
    onClose();
    getTasks();
  };

  return (
    <DrScreen>
      {isOpen && (
        <DrModal isOpen={isOpen} onClose={onClose}>
          <CreateTask onSubmt={createTask} onClose={onClose} />
        </DrModal>
      )}
      {tasks.map(task => (
        <TaskCard
          key={task}
          task={task}
          onPress={() => nav.navigate('TaskDetails', { task: task })}
        />
      ))}
    </DrScreen>
  );
}

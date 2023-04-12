import taskService from '@sb/services/taskService';
import { Button, Heading, TextArea, useDisclose } from 'native-base';
import React, { useEffect, useState } from 'react';
import TaskCard from '../Calendar/components/TaskCard';
import DrScreen from '@sb/components/DrScreen';
import DrModal from '@sb/components/DrModal';
import DrForm from '@sb/components/DrForm';

export default function TodayScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getTasks();
    });
  }, []);

  const getTasks = async () => {
    const tasks = await taskService.getAll();
    setTasks(tasks);
  };

  const handleTaskPress = (task: string) => {
    setSelectedTask(task);
    onOpen();
  };

  return (
    <DrScreen>
      {tasks.map(task => (
        <TaskCard key={task} task={task} onPress={() => handleTaskPress(task)} />
      ))}
      <DrModal isOpen={isOpen} onClose={onClose}>
        <DrScreen>
          <Heading>{selectedTask}</Heading>
          <DrForm>
            <TextArea placeholder="Note" autoCompleteType="" />
            <Button onPress={onClose}>打卡</Button>
          </DrForm>
        </DrScreen>
      </DrModal>
    </DrScreen>
  );
}

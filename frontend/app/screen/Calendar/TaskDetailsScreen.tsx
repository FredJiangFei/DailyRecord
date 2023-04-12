import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Button } from 'native-base';
import taskService from '@sb/services/taskService';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import DrScreen from '@sb/components/DrScreen';

export default function TaskDetailsScreen() {
  const route: any = useRoute();
  const nav: NavigationProp<ParamListBase> = useNavigation();

  const handleDelete = async () => {
    await taskService.deleteTask(route?.params?.task);
    nav.goBack();
  };

  return (
    <DrScreen>
      <Text>Task: {route?.params?.task}</Text>
      <Button onPress={handleDelete}>Delete</Button>
    </DrScreen>
  );
}

const styles = StyleSheet.create({});

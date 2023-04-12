import { Text } from 'react-native';
import React from 'react';
import { Pressable } from 'native-base';

export default function TaskCard({ task, onPress }) {
  return (
    <Pressable p={4} bgColor="red.300" my={1} onPress={onPress}>
      <Text>{task}</Text>
    </Pressable>
  );
}

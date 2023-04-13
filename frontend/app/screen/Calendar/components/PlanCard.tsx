import { Text } from 'react-native';
import React from 'react';
import { Pressable } from 'native-base';
import { Plan } from '@sb/models/plan';

type PropType = {
  plan: Plan;
  onPress: any;
};

const PlanCard: React.FC<PropType> = ({ plan, onPress }) => {
  return (
    <Pressable p={4} bgColor="red.300" my={1} onPress={() => onPress(plan.id)}>
      <Text>{plan.title}</Text>
    </Pressable>
  );
};

export default PlanCard;

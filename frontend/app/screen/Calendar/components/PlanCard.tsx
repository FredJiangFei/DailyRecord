import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { Pressable } from 'native-base';
import { Plan } from '@sb/models/plan';
import colors from '@sb/config/colors';

type PropType = {
  plan: Plan;
  onPress: any;
};

const PlanCard: React.FC<PropType> = ({ plan, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress(plan.id)}>
      <Text>{plan.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 8,
  }
})

export default PlanCard;

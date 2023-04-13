import { Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Button } from 'native-base';
import planService from '@sb/services/planService';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import DrScreen from '@sb/components/DrScreen';

export default function PlanDetailsScreen() {
  const route: any = useRoute();
  const nav: NavigationProp<ParamListBase> = useNavigation();

  const handleDelete = async () => {
    await planService.deletePlan(route?.params?.id);
    nav.goBack();
  };

  return (
    <DrScreen>
      <Text>Plan: {route?.params?.id}</Text>
      <Button onPress={handleDelete}>Delete</Button>
    </DrScreen>
  );
}

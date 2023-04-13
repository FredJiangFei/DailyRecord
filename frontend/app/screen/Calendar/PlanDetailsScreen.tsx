import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, Heading } from 'native-base';
import planService from '@sb/services/planService';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import DrScreen from '@sb/components/DrScreen';
import { Punch } from '@sb/models/punch';
import { Plan } from '@sb/models/plan';

export default function PlanDetailsScreen() {
  const route: any = useRoute();
  const [punchs, setPunchs] = useState<Punch[]>([]);
  const [plan, setPlan] = useState<Plan>();
  const nav: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    getPlan();
    getPunchs();
  }, []);

  const handleDelete = async () => {
    await planService.deletePlan(route?.params?.id);
    nav.goBack();
  };

  const getPlan = async () => {
    const plan = await planService.getPlan(route?.params?.id);
    setPlan(plan);
  };

  const getPunchs = async () => {
    const punchs = await planService.getPunchs(route?.params?.id);
    setPunchs(punchs);
  };

  return (
    <DrScreen>
      <Heading>{plan?.title}</Heading>
      {punchs.map(punch => (
        <Text key={punch.id}>{punch.date}</Text>
      ))}

      <Button onPress={handleDelete}>Delete</Button>
    </DrScreen>
  );
}

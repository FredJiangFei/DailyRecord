import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, ChevronLeftIcon, Heading } from 'native-base';
import planService from '@sb/services/planService';
import DrScreen from '@sb/components/DrScreen';
import { Punch } from '@sb/models/punch';
import { Plan } from '@sb/models/plan';
import colors from '@sb/config/colors';

export default function PlanDetailsScreen({ navigation }) {
  const route: any = useRoute();
  const [punchs, setPunchs] = useState<Punch[]>([]);
  const [plan, setPlan] = useState<Plan>();

  React.useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Plans',
      headerBackTitleStyle: { color: colors.back },
      headerBackImage: () => <ChevronLeftIcon size="md" color={colors.back}/>,
    });
  }, [navigation]);

  useEffect(() => {
    getPlan();
    getPunchs();
  }, []);

  const handleDelete = async () => {
    await planService.deletePlan(route?.params?.id);
    navigation.goBack();
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

import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, ChevronLeftIcon, Heading } from 'native-base';
import planService from '@sb/services/planService';
import { Punch } from '@sb/models/punch';
import { Plan } from '@sb/models/plan';
import colors from '@sb/config/colors';
import { Calendar } from 'react-native-calendars';
import DrScrollScreen from '@sb/components/DrScrollScreen';
import { MarkedDates } from 'react-native-calendars/src/types';

export default function PlanDetailsScreen({ navigation }) {
  const route: any = useRoute();
  const [punchs, setPunchs] = useState<MarkedDates>();
  const [plan, setPlan] = useState<Plan>();
  const id = route?.params?.id;

  React.useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Plans',
      headerBackTitleStyle: { color: colors.back },
      headerBackImage: () => <ChevronLeftIcon size="md" color={colors.back} />,
    });
  }, [navigation]);

  useEffect(() => {
    getPlan();
    getPunchs();
  }, []);

  const handleDelete = async () => {
    await planService.deletePlan(id);
    navigation.goBack();
  };

  const getPlan = async () => {
    const plan = await planService.getPlan(id);
    setPlan(plan);
  };

  const getPunchs = async () => {
    const punchs = await planService.getPunchs(id);
    
    const punchsMap = {};
    punchs.forEach(punch => {
      punchsMap[punch.date] = { selected: true, selectedColor: colors.card };
    });
    setPunchs(punchsMap);
  };

  return (
    <DrScrollScreen>
      <Heading>{plan?.title}</Heading>
      <Calendar markedDates={punchs} />

      <Button onPress={handleDelete} mt={2}>Delete</Button>
    </DrScrollScreen>
  );
}

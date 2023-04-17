import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, ChevronLeftIcon, Heading, useDisclose } from 'native-base';
import planService from '@sb/services/planService';
import { Plan } from '@sb/models/plan';
import colors from '@sb/config/colors';
import { Calendar } from 'react-native-calendars';
import DrScrollScreen from '@sb/components/DrScrollScreen';
import { MarkedDates } from 'react-native-calendars/src/types';
import DrConfirm from '@sb/components/DrConfirm';

export default function PlanDetailsScreen({ navigation }) {
  const route: any = useRoute();
  const [punchs, setPunchs] = useState<MarkedDates>();
  const [plan, setPlan] = useState<Plan>();
  const id = route?.params?.id;
  const { isOpen, onOpen, onClose } = useDisclose();

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
    onClose();
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

      <Button onPress={onOpen} my={2}>
        删除计划
      </Button>

      <DrConfirm
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleDelete}
        title="删除计划"
        content="确定要删除计划吗?"
      />
    </DrScrollScreen>
  );
}

import planService from '@sb/services/planService';
import { Avatar, Pressable, Row, Text, useDisclose } from 'native-base';
import React, { useEffect, useState } from 'react';
import DrScreen from '@sb/components/DrScreen';
import DrModal from '@sb/components/DrModal';
import { Plan } from '@sb/models/plan';
import PunchPlan from './components/PunchPlan';
import colors from '@sb/config/colors';
import { PunchCommand } from '@sb/models/commands/punchCommand';
var moment = require('moment');

export default function TodayScreen({ navigation }) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<PunchCommand>();
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getPlans();
    });
  }, []);

  const getPlans = async () => {
    const plans = await planService.getAll();
    setPlans(plans);
  };

  const handlePlanPress = async (plan: Plan) => {
    const punchs = await planService.getPunchs(plan.id);
    const today = moment().format('YYYY-MM-DD');
    const todayPunch = punchs.find(p => p.date === today);
    setSelectedPlan({
      ...plan,
      isPunchToday: todayPunch ? true : false,
    });
    onOpen();
  };

  const handlePlanPunch = async (plan: Plan) => {
    await planService.punch(plan.id);
    onClose();
  };

  return (
    <DrScreen>
      <Row flexWrap="wrap">
        {plans.map(plan => (
          <Pressable
            onPress={() => handlePlanPress(plan)}
            key={plan.id}
            alignItems="center"
            w="25%"
            mt={4}>
            <Avatar bg={colors.card}>{plan.title}</Avatar>
            <Text>{plan.title}</Text>
          </Pressable>
        ))}
      </Row>

      <DrModal isOpen={isOpen} onClose={onClose}>
        <PunchPlan plan={selectedPlan} onPunch={handlePlanPunch} />
      </DrModal>
    </DrScreen>
  );
}

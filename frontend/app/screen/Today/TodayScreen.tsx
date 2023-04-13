import planService from '@sb/services/planService';
import { useDisclose } from 'native-base';
import React, { useEffect, useState } from 'react';
import PlanCard from '../Calendar/components/PlanCard';
import DrScreen from '@sb/components/DrScreen';
import DrModal from '@sb/components/DrModal';
import { Plan } from '@sb/models/plan';
import PunchPlan from './components/PunchPlan';

export default function TodayScreen({ navigation }) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
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

  const handlePlanPress = (plan: Plan) => {
    setSelectedPlan(plan);
    onOpen();
  };

  const handlePlanPunch = async (plan: Plan) => {
    await planService.punch(plan.id);
    onClose();
  };

  return (
    <DrScreen>
      {plans.map(plan => (
        <PlanCard key={plan.id} plan={plan} onPress={() => handlePlanPress(plan)} />
      ))}
      <DrModal isOpen={isOpen} onClose={onClose}>
        <PunchPlan plan={selectedPlan} onPunch={handlePlanPunch} />
      </DrModal>
    </DrScreen>
  );
}

import planService from '@sb/services/planService';
import { Button, Heading, TextArea, useDisclose } from 'native-base';
import React, { useEffect, useState } from 'react';
import PlanCard from '../Calendar/components/PlanCard';
import DrScreen from '@sb/components/DrScreen';
import DrModal from '@sb/components/DrModal';
import DrForm from '@sb/components/DrForm';
import { Plan } from '@sb/models/plan';

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

  return (
    <DrScreen>
      {plans.map(plan => (
        <PlanCard key={plan.id} plan={plan} onPress={() => handlePlanPress(plan)} />
      ))}
      <DrModal isOpen={isOpen} onClose={onClose}>
        <DrScreen>
          <Heading>{selectedPlan?.title}</Heading>
          <DrForm>
            <TextArea placeholder="Note" autoCompleteType="" />
            <Button onPress={onClose}>打卡</Button>
          </DrForm>
        </DrScreen>
      </DrModal>
    </DrScreen>
  );
}

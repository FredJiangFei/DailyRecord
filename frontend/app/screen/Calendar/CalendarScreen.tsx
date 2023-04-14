import React, { useEffect, useState } from 'react';
import DrModal from '@sb/components/DrModal';
import { IconButton, useDisclose } from 'native-base';
import planService from '@sb/services/planService';
import planFirebaseService from '@sb/services/planFirebaseService';
import CreatePlan from './components/CreatePlan';
import DrScreen from '@sb/components/DrScreen';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import PlanCard from './components/PlanCard';
import { Plan } from '@sb/models/plan';
import { AntDesign } from "@expo/vector-icons";

export default function CalendarScreen({ navigation }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [plans, setPlans] = useState<Plan[]>([]);
  const nav: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getPlans();
    });
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton size={8} mr={2} onPress={onOpen} variant="solid" borderRadius={50} _icon={{
          as: AntDesign,
          name: "plus"
        }} />
      ),
    });
  }, [navigation]);

  const getPlans = async () => {
    const plans = await planFirebaseService.getAll();
    setPlans(plans);
  };

  const createPlan = async (values: Plan) => {
    await planFirebaseService.create(values.title);
    onClose();
    getPlans();
  };

  return (
    <DrScreen>
      {isOpen && (
        <DrModal isOpen={isOpen} onClose={onClose}>
          <CreatePlan onSubmt={createPlan} onClose={onClose} />
        </DrModal>
      )}
      {plans.map(plan => (
        <PlanCard
          key={plan.id}
          plan={plan}
          onPress={id => nav.navigate('PlanDetails', { id: id })}
        />
      ))}
    </DrScreen>
  );
}

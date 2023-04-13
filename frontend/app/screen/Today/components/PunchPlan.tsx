import React from 'react';
import DrScreen from '@sb/components/DrScreen';
import { Plan } from '@sb/models/plan';
import { Button, Heading } from 'native-base';
import DrForm from '@sb/components/DrForm';

type PropType = {
  plan?: Plan;
  onPunch?: any;
};
const PunchPlan: React.FC<PropType> = props => {
  const { plan, onPunch } = props;

  return (
    <DrScreen>
      <Heading>{plan?.title}</Heading>
      <DrForm>
        <Button onPress={() => onPunch(plan)}>打卡</Button>
      </DrForm>
    </DrScreen>
  );
};

export default PunchPlan;

import React from 'react';
import DrScreen from '@sb/components/DrScreen';
import { Button, Heading } from 'native-base';
import DrForm from '@sb/components/DrForm';
import { PunchCommand } from '@sb/models/commands/punchCommand';

type PropType = {
  plan?: PunchCommand;
  onPunch?: any;
};
const PunchPlan: React.FC<PropType> = props => {
  const { plan, onPunch } = props;

  return (
    <DrScreen>
      <Heading>{plan?.title}</Heading>
      <DrForm>
        {plan?.isPunchToday ? <Heading>今日已打卡</Heading> : <Button onPress={() => onPunch(plan)}>打卡</Button>}
      </DrForm>
    </DrScreen>
  );
};

export default PunchPlan;

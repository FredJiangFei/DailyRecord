import AsyncStorage from '@react-native-async-storage/async-storage';
import utils from '@sb/utils/utils';

const PLANS_KEY = '@dr-plans';

async function create(title) {
  const plans = await AsyncStorage.getItem(PLANS_KEY);
  const planArray = JSON.parse(plans ?? '[]');
  const newPlans = [
    ...planArray,
    {
      id: utils.generateUUID(),
      title: title,
    },
  ];

  await AsyncStorage.setItem(PLANS_KEY, JSON.stringify(newPlans));
}

async function deletePlan(id) {
  const plans = await AsyncStorage.getItem(PLANS_KEY);
  const planArray = JSON.parse(plans ?? '[]');
  const newPlans = planArray.filter(x => x.id != id);
  await AsyncStorage.setItem(PLANS_KEY, JSON.stringify(newPlans));
}

async function getAll() {
  const plans = await AsyncStorage.getItem(PLANS_KEY);
  const planArray = JSON.parse(plans ?? '[]');
  return planArray;
}

export default {
  create,
  deletePlan,
  getAll,
};

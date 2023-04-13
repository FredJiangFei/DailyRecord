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

async function getPlan(id) {
  const plans = await AsyncStorage.getItem(PLANS_KEY);
  const planArray = JSON.parse(plans ?? '[]');
  const plan = planArray.find(x => x.id === id);
  return plan;
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

async function punch(id) {
  const today = new Date();
  const key = `${PLANS_KEY}-${id}`;
  const punchs = await AsyncStorage.getItem(key);
  const punchArray = JSON.parse(punchs ?? '[]');

  const newPunchs = [
    ...punchArray,
    {
      id: utils.generateUUID(),
      date: today.toLocaleDateString(),
    },
  ];
  await AsyncStorage.setItem(key, JSON.stringify(newPunchs));
}

async function getPunchs(id) {
  const key = `${PLANS_KEY}-${id}`;
  const punchs = await AsyncStorage.getItem(key);
  const punchArray = JSON.parse(punchs ?? '[]');
  return punchArray;
}

export default {
  create,
  getPlan,
  deletePlan,
  getAll,
  punch,
  getPunchs,
};

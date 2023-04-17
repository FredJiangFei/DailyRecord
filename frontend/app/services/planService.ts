import AsyncStorage from '@react-native-async-storage/async-storage';
import { Plan } from '@sb/models/plan';
import utils from '@sb/utils/utils';
var moment = require('moment');

const PLANS_KEY = '@dr-plans';

async function create(plan: Plan) {
  const plans = await AsyncStorage.getItem(PLANS_KEY);
  const planArray = JSON.parse(plans ?? '[]');
  const newPlans = [
    ...planArray,
    {
      id: utils.generateUUID(),
      title: plan.title
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

  await AsyncStorage.removeItem(`${PLANS_KEY}-${id}`);
}

async function getAll() {
  const plans = await AsyncStorage.getItem(PLANS_KEY);
  const planArray = JSON.parse(plans ?? '[]');
  return planArray;
}

async function punch(id) {
  const today = moment().format('YYYY-MM-DD');
  const key = `${PLANS_KEY}-${id}`;
  const punchs = await AsyncStorage.getItem(key);
  const punchArray = JSON.parse(punchs ?? '[]');

  const newPunchs = [
    ...punchArray,
    {
      id: utils.generateUUID(),
      date: today,
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

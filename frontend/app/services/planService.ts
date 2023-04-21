import { db } from '@sb/firebase/config';
import { Plan } from '@sb/models/plan';
import utils from '@sb/utils/utils';
import { collection, addDoc, setDoc, getDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
var moment = require('moment');

const entityRef = collection(db, 'plans');

async function create(data) {
  await addDoc(entityRef, data);
}

async function getPlan(id): Promise<Plan> {
  const plan = await getDoc(doc(db, 'plans', id));
  return {
    id: plan.id,
    title: plan.data()?.title,
  };
}

async function deletePlan(id) {
  await deleteDoc(doc(db, 'plans', id));
}

async function getAll(): Promise<Plan[]> {
  const result = await getDocs(entityRef);
  const plans = await result.docs.map(doc => ({
    id: doc.id,
    title: doc.data().title,
  }));

  return plans;
}

async function punch(id) {
  const today = moment().format('YYYY-MM-DD');
  const newPunchs = [
    {
      id: utils.generateUUID(),
      date: today,
    },
  ];
  const data = {
    punchs: newPunchs,
  };
  await setDoc(doc(db, 'plans', id), data, { merge: true });
}

async function getPunchs(id) {
  const plan = await getDoc(doc(db, 'plans', id));
  return plan.data()?.punchs;
}

export default {
  create,
  getAll,
  getPlan,
  deletePlan,
  punch,
  getPunchs,
};

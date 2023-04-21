import { db } from '@sb/firebase/config';
import { Plan } from '@sb/models/plan';
import { collection, addDoc, getDoc, getDocs, doc } from 'firebase/firestore';

const entityRef = collection(db, 'plans');

async function create(title) {
  await addDoc(entityRef, {
    title: title,
  });
}

async function getPlan(id) {
  const result = await getDocs(entityRef);
  const plan = await result.docs
    .map(doc => ({
      id: doc.id,
      title: doc.data().title,
    }))
    .find(doc => doc.id === id);
  return plan;
}

async function getAll(): Promise<Plan[]> {
  const result = await getDocs(entityRef);
  const plans = await result.docs.map(doc => ({
    id: doc.id,
    title: doc.data().title,
  }));

  return plans;
}

async function deletePlan(id) {}

async function getPunchs(id) {
  return [];
}

export default {
  create,
  getAll,
  getPlan,
  deletePlan,
  getPunchs,
};

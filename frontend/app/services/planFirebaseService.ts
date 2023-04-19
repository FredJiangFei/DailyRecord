import { db } from '@sb/firebase/config';
import { Plan } from '@sb/models/plan';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const entityRef = collection(db, 'plans');

async function create(data) {
  await addDoc(entityRef, data);
}

async function getAll(): Promise<Plan[]> {
  const result = await getDocs(entityRef);
  const plans = await result.docs.map(doc => ({
    id: doc.id,
    title: doc.data().title,
  }));

  return plans;
}

export default {
  create,
  getAll,
};

import firebase from '@sb/firebase/config';
import { Plan } from '@sb/models/plan';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const db = getFirestore(firebase);
const entityRef = collection(db, 'plans');

async function create(title) {
  await addDoc(entityRef, {
    title: title,
  });
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

import { db } from '@sb/firebase/config';
import { Plan } from '@sb/models/plan';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const entityRef = collection(db, 'plans');

async function create(title) {
  await addDoc(entityRef, {
    title: title,
  });
}

async function getAll(): Promise<Plan[]> {
  console.log('getAll');
  const result = await getDocs(entityRef);
  result.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  // const plans = await result.docs.map(doc => ({
  //   id: doc.id,
  //   title: doc.data().title,
  // }));

  return [];
}

export default {
  create,
  getAll,
};

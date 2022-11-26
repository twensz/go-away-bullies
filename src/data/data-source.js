import {
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  collection,
  Timestamp,
} from 'firebase/firestore';
import db from './firebase-config';

import SwalCustom from './swal-custom';

async function getAllData(collectionName) {
  try {
    const result = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((document) => {
      result.push({
        id: document.id,
        data: document.data(),
      });
    });

    return result;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}
async function getData(collectionName, id) {
  try {
    let result;
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      result = { id, data: docSnap.data() };
    }

    return result;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}
async function addData(collectionName, data) {
  try {
    await addDoc(collection(db, collectionName), {
      ...data,
      dibuatPada: Timestamp.now(),
    });

    return true;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}
async function deleteData(collectionName, id) {
  try {
    await deleteDoc(doc(db, 'artikel', id));
  } catch (error) {
    await SwalCustom.showError(error);
  }
}
async function updateData(collectionName, { id, data }) {
  try {
    await updateDoc(doc(db, collectionName, id), {
      ...data,
    });
    return true;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

function formatDate(timestamp) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(timestamp.seconds * 1000).toLocaleDateString('id-ID', options);
}

export {
  getAllData,
  getData,
  addData,
  updateData,
  deleteData,
  formatDate,
};

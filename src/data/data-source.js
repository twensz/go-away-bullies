import {
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  collection,
  Timestamp,
  query,
  limit,
  orderBy,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { db, storage } from './firebase-config';

import SwalCustom from './swal-custom';

async function getAllData(collectionName) {
  try {
    const result = [];

    const q = query(
      collection(db, collectionName),
      orderBy('dibuatPada', 'desc'),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((document) => {
      const data = document.data();
      result.push({ id: document.id, data });
    });

    return result || null;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}
async function getDataLimit(collectionName, limitNumber) {
  try {
    const result = [];

    const q = query(
      collection(db, collectionName),
      orderBy('dibuatPada', 'desc'),
      limit(limitNumber),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((document) => {
      const data = document.data();
      result.push({ id: document.id, data });
    });

    return result || null;
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
    await deleteDoc(doc(db, collectionName, id));
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

async function uploadFile(file) {
  if (!file) {
    await SwalCustom.showError('Belum ada file yang dipilih');
    return false;
  }

  const generateFileName = +new Date();

  try {
    const storageRef = ref(storage, `/files/file-${generateFileName}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

function formatDate(timestamp) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(timestamp.seconds * 1000).toLocaleDateString('id-ID', options);
}

function formatDateForInput(date) {
  const arrDate = date.split('-');
  const arrDateReverse = arrDate.reverse();
  return arrDateReverse.join('/');
}

export {
  getAllData,
  getData,
  getDataLimit,
  addData,
  updateData,
  deleteData,
  uploadFile,
  formatDate,
  formatDateForInput,
};

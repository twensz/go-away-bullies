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

async function getAllArtikel() {
  try {
    const result = [];
    const querySnapshot = await getDocs(collection(db, 'artikel'));
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

async function getArtikel(id) {
  try {
    let result;
    const docRef = doc(db, 'artikel', id);
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

async function addArtikel({
  judul,
  isi,
  penulis,
}) {
  try {
    await addDoc(collection(db, 'artikel'), {
      judul,
      isi,
      penulis,
      dibuatPada: Timestamp.now(),
    });

    return true;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

async function updateArtikel({ id, data }) {
  try {
    await updateDoc(doc(db, 'artikel', id), {
      ...data,
    });

    await SwalCustom.showSuccess('Berhasil mengubah artikel');
    return true;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

async function deleteArtikel(id) {
  try {
    await deleteDoc(doc(db, 'artikel', id));
  } catch (error) {
    await SwalCustom.showError(error);
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
  getAllArtikel,
  getArtikel,
  addArtikel,
  updateArtikel,
  deleteArtikel,
  formatDate,
};

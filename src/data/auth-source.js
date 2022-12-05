import {
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from 'firebase/firestore';
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';
import { db } from './firebase-config';

import SwalCustom from './swal-custom';
import CONFIG from '../globals/config';

const collectionRef = collection(db, 'user');

async function checkEmail(email) {
  try {
    let isEmailExist;
    const q = query(
      collectionRef,
      where('email', '==', email),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.email === email) {
        isEmailExist = true;
      }
    });

    return isEmailExist || false;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

async function login({ email, password }) {
  try {
    let user;

    const q = query(
      collectionRef,
      where('email', '==', email),
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const decryptedPassword = AES.decrypt(data.password, CONFIG.PASSWORD_CRYPTO_KEY)
        .toString(enc.Utf8);
      user = password === decryptedPassword ? { id: doc.id, data } : null;
    });

    return user || null;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

async function register({
  nama,
  email,
  password,
  konfirmasiPassword,
  role = 'user',
}) {
  if (password !== konfirmasiPassword) {
    await SwalCustom.showError('Konfirmasi password tidak sesuai');
    return false;
  }
  if (await checkEmail(email)) {
    await SwalCustom.showError('Email telah digunakan');
    return false;
  }

  const encryptedPassword = AES.encrypt(password, CONFIG.PASSWORD_CRYPTO_KEY).toString();

  try {
    await addDoc(collectionRef, {
      nama,
      email,
      password: encryptedPassword,
      role,
      dibuatPada: Timestamp.now(),
    });

    return true;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function getUserLogged() {
  try {
    let result;

    const querySnapshot = await getDocs(collectionRef);
    const accessToken = getAccessToken();

    querySnapshot.forEach((document) => {
      if (document.id === accessToken) {
        result = {
          id: document.id,
          data: document.data(),
        };
      }
    });

    return result;
  } catch (error) {
    await SwalCustom.showError(error);
    return false;
  }
}

export {
  getAccessToken,
  putAccessToken,
  checkEmail,
  login,
  register,
  getUserLogged,
};

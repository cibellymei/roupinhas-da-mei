import { initializeApp } from 'firebase/app'; // Importa funções necessárias do Firebase para inicialização e configuração

import {
  getAuth, // Obtém a instância do serviço de autenticação
  signInWithRedirect, // Realiza o login com redirecionamento
  signInWithPopup, // Realiza o login com uma janela popup
  GoogleAuthProvider, // Provedor de autenticação do Google
  createUserWithEmailAndPassword, // Cria um novo usuário com email e senha
  signInWithEmailAndPassword, // Faz login com email e senha
  signOut, // Faz logout do usuário atual
  onAuthStateChanged, // Adiciona um ouvinte para mudanças no estado de autenticação
} from 'firebase/auth';
import {
  getFirestore, // Obtém a instância do serviço Firestore
  doc, // Referência para um documento específico
  getDoc, // Obtém dados de um documento
  setDoc, // Define ou atualiza dados de um documento
  collection, // Referência para uma coleção de documentos
  writeBatch, // Permite realizar múltiplas operações de gravação em lote
  query, // Cria uma consulta para recuperar documentos
  getDocs, // Obtém documentos que correspondem a uma consulta
} from 'firebase/firestore';

// Configuração do Firebase com as credenciais do projeto
const firebaseConfig = {
  apiKey: "AIzaSyBkJW8k5e7GOZ3Du5heaIEfFL2UFDEzG3c",
  authDomain: "roupinhas-da-mei.firebaseapp.com",
  projectId: "roupinhas-da-mei",
  storageBucket: "roupinhas-da-mei.appspot.com",
  messagingSenderId: "823269503089",
  appId: "1:823269503089:web:5abc79cbd4cddfff60abd0",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
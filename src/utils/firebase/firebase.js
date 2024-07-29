import { initializeApp } from 'firebase/app'; // Importa a função initializeApp do Firebase para inicializar o aplicativo Firebase
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'; // Importa várias funções e objetos relacionados à autenticação do Firebase
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'; // Importa várias funções e objetos relacionados ao Firestore do Firebase

// Configuração do Firebase com as credenciais do projeto
const firebaseConfig = {
  apiKey: "AIzaSyBkJW8k5e7GOZ3Du5heaIEfFL2UFDEzG3c",
  authDomain: "roupinhas-da-mei.firebaseapp.com",
  projectId: "roupinhas-da-mei",
  storageBucket: "roupinhas-da-mei.appspot.com",
  messagingSenderId: "823269503089",
  appId: "1:823269503089:web:5abc79cbd4cddfff60abd0"
};

export const firebaseApp = initializeApp(firebaseConfig); // Inicializa o aplicativo Firebase com a configuração fornecida

const googleProvider = new GoogleAuthProvider(); // Cria um provedor de autenticação do Google

googleProvider.setCustomParameters({ // Define parâmetros personalizados para o provedor de autenticação do Google
  prompt: 'select_account',
});

export const auth = getAuth(); // Obtém o serviço de autenticação do Firebase

// Funções de autenticação usando o provedor do Google
export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); // Obtém o serviço Firestore do Firebase


// Função para adicionar uma coleção de documentos no Firestore
export const addCollectionAndDocuments = async (
  collectionKey, 
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  // Itera sobre os objetos a serem adicionados e os adiciona em lote
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
  });
  // Executa o lote de escrita no Firestore
  await batch.commit();
  console.log('done');
};

// Função para obter categorias e documentos do Firestore
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  
  // Executa a consulta e obtém um snapshot dos documentos retornados
  const querySnapshot = await getDocs (q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items; 
    return acc;
  },{})
  return categoryMap;
}

// Função para criar um documento de usuário a partir da autenticação
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {

  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const { displayName, email } = userAuth;

  const createdAt = new Date();

  const userData = {
    displayName: displayName || additionalInformation.displayName || "",
    email: email || "",
    createdAt,
    ...additionalInformation,
  };

  try {
    const userSnapshot = await getDoc(userDocRef);

    // Se o documento do usuário não existir, cria um novo documento
    if (!userSnapshot.exists()) {
      await setDoc(userDocRef, userData);
    }
  } catch (error) {
    console.log('error creating the user', error.message);
  }

  return userDocRef;
};

// Função para criar um usuário com email e senha
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//Função para fazer login do usuário com email e senha
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Função para fazer logout do usuário
export const signOutUser = async () => await signOut(auth);

// Listener para mudanças no estado de autenticação do usuário
export const onAuthStateChangedListener = (callback) => {onAuthStateChanged(auth, callback );}


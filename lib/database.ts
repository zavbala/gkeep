import { createFirebaseApp } from "./firebase";
import type { Note } from "./types";
import {
  getDocs,
  collection,
  getFirestore,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore/lite";

const firebase = createFirebaseApp();
const firestore = getFirestore(firebase);
const notesRef = collection(firestore, "notes");

export default {
  async all() {
    try {
      const snapshot = await getDocs(notesRef);
      return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.log(error);
    }
  },

  async create(note: Partial<Note>) {
    try {
      await setDoc(doc(notesRef), {
        ...note,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async delete(id: string) {
    try {
      await deleteDoc(doc(notesRef, id));
    } catch (error) {
      console.log(error);
    }
  },

  async update(id: string, note: Partial<Note>) {
    const { id: fromDB, ...rest } = note;
    try {
      await setDoc(doc(notesRef, id), {
        ...rest,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async get(id: string) {
    const item = await getDoc(doc(notesRef, id));
    if (item.exists()) return { id: item.id, ...item.data() };
    else throw new Error("Item Not Found");
  },
};

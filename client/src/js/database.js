import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
  console.log('PUT content in the database');
  const jateDb = await openDB('jate', 1);
  const txt = jateDb.transaction('jate', 'readwrite');
  const store = txt.objectStore('jate');
  const request = store.put({
    id: 1,
    value: content
  });
  const result = await request;
  console.log('Content saved to the database', result.value);
} catch (err) {
    console.log(err);
    console.error('putDb not implemented');
  };

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log('GET content from the database');
    const jateDb = await openDB('jate', 1);
    const txt = jateDb.transaction('jate', 'readonly');
    const store = txt.objectStore('jate');
    const request = store.get(1);
    const result = await request;
    if (result) {
      console.log('Content retrieved from database', result.value)
    } else {
      console.log('No content found in the database');
    }
    return result.value;
  } catch(err) {
      console.log(err);
      console.error('getDb not implemented');
    };
};

initdb();

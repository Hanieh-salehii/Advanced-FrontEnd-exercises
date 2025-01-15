import { compose, createStore } from "redux";
import rootReducer from "./reducer";
import { STORAGE_ROOM_LIST } from "../constant";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const LoadStore = () => {
  try {
    const serializedStore = localStorage.getItem(STORAGE_ROOM_LIST);
    return serializedStore ? JSON.parse(serializedStore) : undefined;
  } catch {
    return undefined;
  }
};
const saveStore = (store) => {
  const serializedStore = JSON.stringify(store);
  localStorage.setItem(STORAGE_ROOM_LIST, serializedStore);
};
const setStorage = LoadStore();
const store = createStore(rootReducer, setStorage, composeEnhancers());
store.subscribe(() => {
  saveStore(store.getState());
});
export default store;

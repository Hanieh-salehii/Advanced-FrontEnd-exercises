import { ADD_ROOM } from "../actions/roomAction";

const initialStore = {
  room: [],
};

const roomReducer = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_ROOM:
      const idOfRoom = store.room.findIndex(
        (card) => card.id === action.payload.id
      );
      if (idOfRoom !== -1) {
        const updatCount = store.room.map((card, index) =>
          index === idOfRoom ? {...card, count: card.count + 1} : card
        );
        return {
          ...store,
          room: [...updatCount],
        };
      } else {
        return {
          ...store,
          room: [{ ...action.payload, count: 1 }, ...store.room],
        };
      }
    default:
      return store;
  }
};

export default roomReducer;

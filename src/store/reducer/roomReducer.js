import { ADD_ROOM } from "../actions/roomAction"

const initialStore = {
    rooms : []
}

const roomReducer = (store=initialStore,action) => {
switch (action.type) {
    case ADD_ROOM:
        return {
            ...store, rooms:[...store.rooms,action.payload]
        };
    default:
        return store;
}
};
export default roomReducer;
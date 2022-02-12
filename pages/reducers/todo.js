const initialState = [];

const addList = (state = initialState, action) => {
    switch (action.type) {
        case "ADDITEM": return [...state,action.payload];
        case "REMITEM": return [...state].filter((i)=>{return i!==action.payload});
        default: return state;
    }
}

export default addList;
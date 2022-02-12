const initialState = ["","","","","","","","",""];
const changeArr = (state = initialState, action) => {
    switch (action.type) {
        case "ARRAY": {
            let x = [...state];
            x[action.payload] = action.chr;
            return x
        }
        case "CLR": {
            let x = ["","","","","","","","",""];
            return x;
        }
        default: return state;
    }
}

export default changeArr;
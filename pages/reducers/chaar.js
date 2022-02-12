const initialState = 'X';
const changeChar = (state = initialState, action) => {
    switch (action.type) {
        case "CHAR": return action.payload == 'X' ? 'O':'X';
        default: return state;
    }
}

export default changeChar;
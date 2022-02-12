export const changeChar = (char) => {
    return {
        type: 'CHAR',
        payload: char,
    }
}

export const changeArr = (idx,chr) => {
    return {
        type: 'ARRAY',
        payload: idx,
        chr:chr
    }
};
export const Rset = (idx) => {
    return {
        type: 'CLR',
    }
};

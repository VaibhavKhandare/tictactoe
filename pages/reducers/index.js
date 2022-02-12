// import changeTheNumber from "./updown";
// import addList from "./todo";
import changeChar from "./chaar";
import changeArr from "./change";
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeArr,changeChar
    }
);

export default reducers;
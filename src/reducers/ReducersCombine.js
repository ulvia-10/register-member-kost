import { ReviewReducer } from "./ReviewReducers";
import { MemberReducer } from "./MemberReducer";
import { combineReducers } from "redux";

export const Globalreducer = combineReducers({
    ReviewReducer, MemberReducer
})
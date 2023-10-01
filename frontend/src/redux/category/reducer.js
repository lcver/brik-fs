import { FETCHCATEGORIES } from "./action";

let initialState = {
    result: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHCATEGORIES:
            return { ...state, result: action.payload };

        default:
            return state;
    }
}

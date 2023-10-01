import {
    CREATEPRODUCT,
    DELETEPRODUCT,
    FETCHPRODUCT,
    UPDATEPRODUCT,
} from "./action";

let initialState = {
    result: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHPRODUCT:
            return { ...state, result: action.payload };

        case DELETEPRODUCT:
            return { ...state, result: action.payload };

        case CREATEPRODUCT:
            return { ...state, result: action.payload };

        case UPDATEPRODUCT:
            return { ...state, result: action.payload };

        default:
            return state;
    }
}

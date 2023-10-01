import { USERLOGIN, USERLOGOUT, USERREGISTER } from "./action";

let initialState = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : { token: null, data: {} };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USERLOGIN:
            return { ...state, token: action.payload };
        case USERREGISTER:
            return { ...state, data: action.payload, token: null };
        case USERLOGOUT:
            return { token: null };

        default:
            return state;
    }
}

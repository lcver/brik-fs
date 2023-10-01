import store from "./store";

let currentAuth;

function listener() {
    let previouseAuth = currentAuth;

    currentAuth = store.getState().auth;

    if (currentAuth !== previouseAuth) {
        localStorage.setItem("auth", JSON.stringify(currentAuth));
    }
}
function listen() {
    store.subscribe(listener);
}

export { listen };

// Das ist ein Reducer, der den Zustand des Authentifizierungsstatus verwaltet.
let userState;

if (window.localStorage.getItem("auth")) {
    userState = JSON.parse(window.localStorage.getItem("auth")); // speichert den Zustand des Authentifizierungsstatus in localStorage ab und holt ihn wieder
} else {
    userState = null;
}

const authReducer = (state = userState, action) => {
    switch (action.type) {
        case 'LOGGED_IN_USER':
            return { ...state, ...action.payload }; // ... ist ein Spread Operator, der die Eigenschaften des Objekts aufteilt und als einzelne Variablen zurückgibt 
            // Beispiel: const obj = {a:1, b:2, c:3} ...obj => a:1, b:2, c:3 
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}

export default authReducer;


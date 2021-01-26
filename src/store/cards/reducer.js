import { SET_CARDS } from "./types";

const InitialState = {
    cards: [],
};

export function reducer ( state = InitialState, {type, payload}) {
    switch  (type) {
        case SET_CARDS:
            return {
                ...state,
                cards: payload,
            }
        default:
            return state
    }
};

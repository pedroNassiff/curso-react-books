import initialState from './initialState'

export enum ReducerTypes {
    ADD = "ADD",
    BORRAR = "BORRAR",
    RESET = "RESET"
}

const MyReducer = (state = initialState, action: any) => {
    console.log(state, action);
    switch (action.type) {
        case "ADD":
            return {...state, favorites: [...state.favorites, action.payload]};
        case "BORRAR":
            const favoritesFiltered = state.favorites.filter(item => item.title !== action.payload.title);
            return {...state, favorites: [...favoritesFiltered] };
        case "RESET":
            return {...state, favorites: [] };
        default:
            return state;
    }
};
export default MyReducer;


const initialState = {
    cat: [],
    favorite: [],
    breed: []
}

export function catFilter(state = initialState, action) {
    switch (action.type) {

        case 'FAVORITE_CAT':
            return {
                ...state,
                favorite: [...state.favorite, action.payload]
            }
        case 'SET_CAT':
            return {
                ...state,
                cat: [...state.cat, action.payload]
            }
        case 'SET_BREED':
            return {
                ...state,
                breed: [...state.breed, action.payload]
            }
        default:
            return (
                state
            )

    }
}
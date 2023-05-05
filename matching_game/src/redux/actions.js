export function setFavorite(favorite) {
    return {
        type: 'FAVORITE_CAT',
        payload: favorite
    }
}
export function setCat(cat) {
    return {
        type: 'SET_CAT',
        payload: cat
    }
}
export function setBreed(breed) {
    return {
        type: 'SET_BREED',
        payload: breed
    }
}
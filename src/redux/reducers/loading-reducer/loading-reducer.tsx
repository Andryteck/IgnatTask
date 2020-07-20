export type LoadingType = {
    loading: boolean
}

let initialState = {loading: false}

export const loadingReducer = (state: LoadingType = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "DELETE_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }

};

export const setLoadingAC = () => {
    return {type: 'SET_LOADING', payload: true}
}
export const deleteLoadingAC = () => {
    return {type: 'DELETE_LOADING', payload: false}
}

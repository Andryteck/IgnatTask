let initialState = [
    {id: '2', name: 'Yoda', age: 18},
    {id: '3', name: 'Froga', age: 0.9},
    {id: '4', name: 'Sveta', age: 31},
    {id: '1', name: 'Andrei', age: 28}
]

export const hwReducer = (state: Array<{ id: string, name: string, age: number }> = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'SORT' :
            if (action.payload === 'up') {
                return [
                    ...state.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                ]
            } else if (action.payload === 'down') {
                return [...state.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))]
            }


        case  'CHECK' :
            return [state.find(i => i.age == action.payload)]

        default:
            return state;
    }

};

export const upAC = () => {
    return {type: 'SORT', payload: 'up'}
}
export const downAC = () => {
    return {type: 'SORT', payload: 'down'}
}
export const checkAC = () => {
    return {type: 'CHECK', payload: 18}
}
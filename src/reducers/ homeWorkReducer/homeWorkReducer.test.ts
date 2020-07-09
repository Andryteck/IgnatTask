import {hwReducer} from "./ homeWorkReducer";

let startState: Array<{ id: string, name: string, age: number }>

beforeEach(() => {
    startState = [
        {id: '1', name: 'Andrei', age: 28},
        {id: '2', name: 'Yoda', age: 18},
        {id: '3', name: 'Froga', age: 0.9},
        {id: '4', name: 'Sveta', age: 31}

    ];
})


test('correct array should be filtered', () => {


    const action = {type: 'SORT', payload: 'up'};

    const endState = hwReducer(startState, action)

    expect(endState).toStrictEqual([
        {id: '1', name: 'Andrei', age: 28},
        {id: '3', name: 'Froga', age: 0.9},
        {id: '4', name: 'Sveta', age: 31},
        {id: '2', name: 'Yoda', age: 18}
    ]);
    expect(endState).not.toEqual([])

});

test('correct array should be filtered2', () => {

    const action = {type: 'SORT', payload: 'down'};

    const endState = hwReducer(startState, action)

    expect(endState).toBe([
        {id: '1', name: 'Andrei', age: 28},
        {id: '3', name: 'Froga', age: 0.9},
        {id: '4', name: 'Sveta', age: 31},
        {id: '2', name: 'Yoda', age: 18}
    ]);
    expect(endState).not.toEqual([])

});

test('correct array should be filtered3', () => {

    const action = {type:  'CHECK', payload:  18};

    const endState = hwReducer(startState, action)

    expect(endState).toStrictEqual([
        {id: '2', name: 'Yoda', age: 18}
    ]);

});
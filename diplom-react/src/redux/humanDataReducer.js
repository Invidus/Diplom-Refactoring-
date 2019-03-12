let initialState = {
    humanData: [
        { height: 170, weight: 70, age: 21 },
        { height: 180, weight: 75, age: 23 },
    ],
    calculations: 0
}
export const humanDataReducer = (initialState, action) => {
    switch (action.type) {
        case 'ADD_INFO':

            
                initialState.calculations = 
                action.weightI/(action.heightI/100)*(action.heightI/100); 
                return initialState;
            default: return initialState;
    }
}

export const addInfoActionCreator = (heightI, weightI, ageI) => ({
    type: 'ADD_INFO', height: heightI, weight: weightI, age: ageI
})


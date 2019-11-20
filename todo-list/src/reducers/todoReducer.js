export const initialState = 
    {
        item: 'Wash Dishes',
        completed: false,
        id: 1
    };


export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                item: action.payload, completed: false, id: Date.now() 
            }
        case 'TOGGLE_COMPLETED':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed}; 
                } else {
                    return todo;
                }
            });
        case 'CLEAR_COMPLETED':
            return state.filter(completed => completed.id !== action.payload);
            default:
                return state; 


    }
}
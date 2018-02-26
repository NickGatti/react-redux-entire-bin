export const addTodo = (formInput) => {
    return {
        type: 'ADD_TODO',
        payload: formInput
    }
}
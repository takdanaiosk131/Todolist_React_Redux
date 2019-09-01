const initState = {
    todos: []
}

const rooReducer = (state=initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos,{id: action.id,text: action.text,done: false}]
            }
        case "REMOVE_TODO":
            const result = state.todos.filter(todo => todo.id !== action.id)
            return {
                ...state,
                todos: result
            }
        case "DONE_TODO":
                const Done = state.todos.map(todo => (todo.id === action.id)? {...todo,done: true}: todo)
                const DontDone = state.todos.map(todo => (todo.id === action.id)? {...todo,done: false}: todo)
                const statusDone = state.todos[action.id].done ? DontDone : Done
                // console.log(statusDone)
            return {
                ...state,
                todos: statusDone
            }
        default:
            return state
    }
}

export default rooReducer
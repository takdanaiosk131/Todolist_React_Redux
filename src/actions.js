let id = 0
const addTodo = (todoText) => {
    return {type: "ADD_TODO", id: id++, text: todoText}
}
const removeTodo = (todoId) => {
    return {type: "REMOVE_TODO", id: todoId}
}
const doneTodo = (todoId) => {
    return {type: "DONE_TODO", id: todoId}
}
export {addTodo, removeTodo, doneTodo}
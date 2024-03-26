// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState={
//     todos:[{id:1,text:"hello world"}]
// }

// export const todoSlice=createSlice({
//     name:'todo',
//     initialState,
//     reducers:{
//         addTodo:(state, action) => { 
//             const todo={
//                 id:nanoid(),
//                 text:action.payload     
//             }
//             state.todos.push(todo)
//         },
//         removeTodo:(state,action) => {
//             state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
//         },
//     }
// })

// export const {addTodo,removeTodo}=todoSlice.actions
// export default todoSlice.reducer

import { createSlice, nanoid } from "@reduxjs/toolkit";

// Function to save state to local storage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.todos);
        localStorage.setItem('todos', serializedState);
    } catch (err) {
        console.error('Error saving state to localStorage:', err);
    }
};
const initialState = localStorage.getItem('todos')
  ? { todos: JSON.parse(localStorage.getItem('todos')) }
  : { todos: [{ id: 1, text: "hello world" }] };

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
            saveState(state); 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveState(state); 
        },
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

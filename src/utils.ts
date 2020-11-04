import { Todo, Todos } from "model";

export const addTodo = (todos: Todos, todo: Todo) => [...todos, todo];

const toggle = (todo: Todo) => ({ ...todo, completed: !todo.completed });

export const toggleTodo = (todos: Todos, id: string) =>
  todos.map(todo => (todo.id === id ? toggle(todo) : todo));

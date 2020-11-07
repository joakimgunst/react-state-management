import { Todo, Todos } from "model";

export const pureAddTodo = (todos: Todos, todo: Todo) => [...todos, todo];

export const pureDeleteTodo = (todos: Todos, id: string) =>
  todos.filter(todo => todo.id !== id);

const toggle = (todo: Todo) => ({ ...todo, completed: !todo.completed });

export const pureToggleTodo = (todos: Todos, id: string) =>
  todos.map(todo => (todo.id === id ? toggle(todo) : todo));

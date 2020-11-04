import { Todo, Todos } from "model";

export const pureAddTodo = (todos: Todos, todo: Todo) => [...todos, todo];

const toggle = (todo: Todo) => ({ ...todo, completed: !todo.completed });

export const pureToggleTodo = (todos: Todos, id: string) =>
  todos.map(todo => (todo.id === id ? toggle(todo) : todo));

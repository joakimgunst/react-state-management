import { Todo } from "model";

const todos: Todo[] = [];

export async function addTodo(todo: Todo) {
  await sleep(200);
  todos.push(todo);
}

export async function toggleTodo(id: string) {
  await sleep(200);
  const todo = todos.find(t => t.id === id);
  if (todo) todo.completed = !todo.completed;
}

export async function getTodos() {
  await sleep(200);
  return [...todos];
}

async function sleep(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

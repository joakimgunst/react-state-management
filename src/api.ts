import Axios from "axios";
import { Todo } from "model";

export const todosPath = "/api/todos";

export async function addTodo(todo: Todo) {
  await Axios.post(todosPath, todo);
}

export async function updateTodo(id: string, todo: Partial<Todo>) {
  await Axios.put(`${todosPath}/${id}`, todo);
}

export async function getTodos() {
  const response = await Axios.get<Todo[]>(todosPath);
  return response.data;
}

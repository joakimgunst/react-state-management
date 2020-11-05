import { Todo } from "model";
import { Pool } from "pg";

const pool = new Pool();

export async function getTodos() {
  const response = await pool.query<Todo>("SELECT * from todos");
  return response.rows;
}

export async function createTodo(todo: Todo) {
  const response = await pool.query<Todo>(
    "INSERT INTO todos (id, text, completed) VALUES ($1, $2, $3) RETURNING *",
    [todo.id, todo.text, todo.completed]
  );
  return response.rows[0];
}

export async function updateTodo(id: string, todo: Todo) {
  await pool.query("UPDATE todos SET completed = $1 WHERE id = $2", [
    todo.completed,
    id,
  ]);
}

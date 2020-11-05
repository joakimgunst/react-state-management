import { NextApiRequest, NextApiResponse } from "next";
import * as db from "db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    const todo = await db.createTodo(req.body);
    res.status(201).json(todo);
  } else {
    const todos = await db.getTodos();
    res.json(todos);
  }
}

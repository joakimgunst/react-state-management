import * as db from "db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "PUT") {
    const id = req.query.id as string;
    await db.updateTodo(id, req.body);
    res.status(204).end();
  } else if (req.method === "DELETE") {
    const id = req.query.id as string;
    await db.deleteTodo(id);
    res.status(204).end();
  }
}

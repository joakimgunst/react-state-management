import { updateTodo } from "db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "PUT") {
    const id = req.query.id as string;
    await updateTodo(id, req.body);
    res.status(204).end();
  }
}

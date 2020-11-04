export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type Todos = ReadonlyArray<Readonly<Todo>>;

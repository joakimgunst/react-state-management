export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type Todos = Record<string, Todo>;

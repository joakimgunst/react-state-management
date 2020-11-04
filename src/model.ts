export interface Todo {
  readonly id: string;
  readonly text: string;
  readonly completed: boolean;
}

export type Todos = ReadonlyArray<Todo>;

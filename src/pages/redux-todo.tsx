import React from "react";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { Todo, Todos } from "model";
import AddForm from "components/AddForm";
import TodoLayout from "components/TodoLayout";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todos,
    showCompleted: false,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      state.todos.push(action.payload.todo);
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.todos.findIndex(t => t.id === action.payload.id);
      state.todos[index].completed = !state.todos[index].completed;
    },
    toggleShowCompleted: state => {
      state.showCompleted = !state.showCompleted;
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
});

const state = store.getState();

type State = typeof state;

const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

const selectVisibleTodos = ({ todos, showCompleted }: State) =>
  todos.filter(t => t.completed === showCompleted);

const { actions } = todoSlice;

export default function Redux() {
  return (
    <Provider store={store}>
      <TodoLayout title="Redux">
        <AddFormContainer />
        <TodoFilterContainer />
        <TodoListContainer />
      </TodoLayout>
    </Provider>
  );
}

function AddFormContainer() {
  const dispatch = useDispatch();
  const addTodo = (todo: Todo) => dispatch(actions.addTodo({ todo }));
  return <AddForm onAdd={addTodo} />;
}

function TodoFilterContainer() {
  const dispatch = useDispatch();
  const showCompleted = useTypedSelector(state => state.showCompleted);
  const toggle = () => dispatch(actions.toggleShowCompleted());
  return <TodoFilter showCompleted={showCompleted} onToggle={toggle} />;
}

function TodoListContainer() {
  const dispatch = useDispatch();
  const todos = useSelector(selectVisibleTodos);
  const toggleTodo = (id: string) => dispatch(actions.toggleTodo({ id }));
  return <TodoList todos={todos} onToggle={toggleTodo} />;
}

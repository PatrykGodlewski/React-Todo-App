import { createGlobalState } from "react-hooks-global-state";

const { setTodo, useTodo } = createGlobalState();

export { setTodo, useTodo };

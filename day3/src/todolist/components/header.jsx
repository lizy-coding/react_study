import { useCallback } from "react";
import { ADD_ITEM } from "../actions";

export default function Header({ dispatch }) {
  const addItem = useCallback(
    (title) => dispatch({ type: ADD_ITEM, payload: { title } }),
    [dispatch]
  );
  return (
    <div>
      <h1>todolist</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addItem(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}

import { ADD_ITEM, REMOVE_COMPLETED } from "./contansts";
/* Borrowed from https://github.com/ai/nanoid/blob/3.0.2/non-secure/index.js
 */

let customAlphabet = (alphabet, size) => {
  return () => {
    let id = "";
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size;
    while (i--) {
      // `| 0` is more compact and faster than `Math.floor()`.
      id += alphabet[(Math.random() * alphabet.length) | 0];
    }
    return id;
  };
};
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat({
        id: customAlphabet(),
        title: action.payload.title,
        completed: false,
      });
    case REMOVE_COMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }

  throw Error(`Unknown action: ${action.type}`);
};

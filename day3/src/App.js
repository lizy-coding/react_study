import "./App.css";
import { useReducer } from "react";
import Header from "./todolist/components/header";
import Footer from "./todolist/components/footer";
import { todoReducer } from "./todolist/reducer";
import Main from "./todolist/components/main";
function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <>
      <Header dispatch={dispatch} />
      <Main todos={todos} dispatch={dispatch} />
      <Footer todos={todos} dispatch={dispatch} />
    </>
  );
}

export default App;

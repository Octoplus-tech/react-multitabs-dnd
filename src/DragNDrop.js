import React, { useEffect } from "react";
import DragItem from "./components/dragItem";
import DropItem from "./components/dropItem";
import "./App.css";
import { useCrossTabState } from "./components/hooks/useCrossTabState";
import { todos } from "./fakeData";
import { arrayToObject } from "./utils/arrayToObject";

function DragNDrop() {
  const [todoValues, setTodoValues] = useCrossTabState("todoValues", {});

  useEffect(() => {
    const groupedById = arrayToObject(todos, "id");
    setTodoValues(groupedById);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  console.log("todoValues***", todoValues);

  return (
    <div className="App">
      <div className="box">
        <DropItem
          heading="Todos"
          onDrop={(id) => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "todo";
            setTodoValues({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map((key) => ({ id: key, ...todoValues[key] }))
            .filter((todo) => todo.state === "todo")
            .map((todo) => (
              <DragItem id={todo.id} data={todo} key={todo.id} />
            ))}
        </DropItem>
        <DropItem
          heading="WIP"
          onDrop={(id) => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "wip";
            setTodoValues({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map((key) => ({ id: key, ...todoValues[key] }))
            .filter((todo) => todo.state === "wip")
            .map((todo) => (
              <DragItem id={todo.id} data={todo} key={todo.id} />
            ))}
        </DropItem>
        <DropItem
          heading="Done"
          onDrop={(id) => {
            const currentTodo = { ...todoValues[id] };
            currentTodo.state = "done";
            setTodoValues({ ...todoValues, ...{ [id]: currentTodo } });
          }}
        >
          {Object.keys(todoValues)
            .map((key) => ({ id: key, ...todoValues[key] }))
            .filter((todo) => todo.state === "done")
            .map((todo) => (
              <DragItem id={todo.id} data={todo} key={todo.id} />
            ))}
        </DropItem>
      </div>
    </div>
  );
}
export default DragNDrop;

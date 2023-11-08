import { useState } from "react";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("안녕하세요");

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();
  };

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);

    console.log(newTodo);
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input type="text" value={newTodo} onChange={onChangeNewTodo} />
      <input type="submit" />
    </form>
  );
};

export default CreateTodo;

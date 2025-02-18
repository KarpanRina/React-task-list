import React from "react";

const Buttons = ({ tasks, setTasks }) => {
  const totalTasks = () => {
    setTasks((prev) => prev.map((task) => ({ ...task, isHidden: false })));
  };

  const tasksLeft = () => {
    setTasks((prev) => prev.map((task) => ({ ...task, isHidden: task.status })));
  };

  return (
    <>
      <button onClick={totalTasks}>Total</button>
      <button onClick={tasksLeft}>Left</button>
    </>
  );
};

export default Buttons;

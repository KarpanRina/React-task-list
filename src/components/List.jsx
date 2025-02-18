import Item from "./Item";

const List = ({ tasks, setTasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Item key={task.id} {...task} setTasks={setTasks} tasks={tasks}/>
      ))}
    </ul>
  );
};

export default List;

import { useEffect, useState } from 'react'
import List from './components/List'
import {v4 as uuidv4} from 'uuid';
import CurrentDate from './components/CurrentDate';
import Buttons from './components/Buttons';

function App() {
  const [tasks, setTasks] = useState(() => 
    !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks')),
  );
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    if(e.key === 'Enter' && taskTitle) {
      const taskTime = new Date().toLocaleTimeString();
      setTasks([...tasks, {
        id: uuidv4(),
        title: taskTitle,
        time: taskTime,
        status: false,
        isHidden: false
      }]);
      setTaskTitle('');

    } ;
  }

  return (
    <div className="container">
      <h1>Note your task</h1>
      <CurrentDate />

      <div className="input-field">
        <input type='text' 
        value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)}  
        onKeyDown={addTask}/>
        <label className={taskTitle && 'none'}>Task name</label>
      </div>
      <div className="buttons">
        <Buttons tasks={tasks} setTasks={setTasks}/>
      </div>
      <List tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App

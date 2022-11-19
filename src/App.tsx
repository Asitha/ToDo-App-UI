import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, addTask } from './API';
import { AddToDo } from './components/AddToDo';
import { Task } from './components/Task'

function App() {
  const [tasks, setTasks] = useState<ToDoItem[]>([]);

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = (): void => {
    getTasks()
      .then(({status, data}) => {
        if (status !== 200) {
          throw new Error("Error retrieving tasks");
        }
        setTasks(data.tasks)
      })
      .catch((err: Error) => { console.log(err) })
  }

  const handleDeleteTask = (id: string): void => {
    deleteTask(id)
      .then(({ status}) => {
        if (status !== 200) {
          throw new Error('Error! Task not deleted')
        }
        fetchTasks()
      })
      .catch((err) => console.log(err))
  }

  const handleAddTask = (description: string): void => {
    addTask(description)
      .then(({ status}) => {
        if (status !== 201) {
          throw new Error("Error todo item not added")
        }
        fetchTasks()
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddToDo addTaskFunc={handleAddTask}></AddToDo>
      
      {tasks.map((todo) => (
        <Task
          key={todo.id}
          deleteTaskFunc={handleDeleteTask}
          toDoItem={todo}
        />
      ))}
    </main>
  );
}

export default App;

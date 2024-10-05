// import react, { useEffect, useState } from 'react'
// import { tasks as data } from './data/tasks'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   setTasks(data)
  // }, []);

  // function createTask(task) {
  //   setTasks([...tasks, {
  //     title: task.title,
  //     id: tasks.length,
  //     description: task.description
  //   }
  //   ]);
  // }

  // function deleteTask(taskId) {
  // setTasks(tasks.filter(task => task.id !== taskId))
  // console.log(tasks)
  // console.log(taskId)
  // }

  return (
    <main className='bg-zinc-900 h-screen p-10'>
      {/* <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
      <div className=' w-3/4  mx-auto'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )

}

export default App;
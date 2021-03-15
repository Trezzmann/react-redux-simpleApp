import React ,{useState}from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
    const [showAdd, setShowAdd] = useState(false)
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
          },
          {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
          },
          {
              "id": 3,
              "text": "Teach at dev",
              "day": "Feb 6th at 1:30pm",
              "reminder": true
          }
    ])

    // on AddTask

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {...task,id}
        setTasks([...tasks,newTask])
    }

    // on delete

    const onDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    } 

    // on toggle

    const onToggle = (id) =>{
        setTasks(tasks.map((task)=> task.id === id ?{...task, reminder :!task.reminder} : task))
    }
    return (
        <div className="container">
            
            <Header title="Tasks Tracker" onAdd={()=>setShowAdd(!showAdd)} showAdd={showAdd} />
            { showAdd && <AddTask onAddTask={addTask}  />}
            { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />:'No tasks to show'}
        </div>
    )
}

export default App

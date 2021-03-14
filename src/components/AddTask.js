import React, { useState } from 'react'

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const addTask = (e) => {
        e.preventDefault()
        if(!text){
            alert('please add text')
            return
        }

        onAddTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    } 

    return (
        <form className="add-task" onSubmit={addTask}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="date & time" value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" className="btn btn-block" value="Save task"/>
        </form>
    )
}

export default AddTask

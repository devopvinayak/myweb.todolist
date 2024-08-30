"use client"

import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);

    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  const completeHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask[i].completed = true;
    setmainTask(copyTask);
  }
  let renderTask = <h2>No Task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div id="main">
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>
          </div>

          <button
            onClick={() => {
              deleteHandler(i)
            }}
          >Delete</button>

          <button
            style={{ backgroundColor: t.completed ? 'black' : 'red' }}
            onClick={() => {
              completeHandler(i)
            }}
          >{t.completed ? 'Completed' : 'Complete'}</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black'>My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button>Add Task</button>
      </form>
      <hr />

      <div>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page

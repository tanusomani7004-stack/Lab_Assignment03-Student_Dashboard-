import React, { useState } from 'react'
import Heading from './Components/Heading'
import AddStudent from './Components/AddStudent'
import StudentsSummary from './Components/StudentSummary'
import AllDetails from './Components/AllDetails'

function App() {

  const initialStudents = [
    {id:1,name:"Tannu",score:100},
    {id:2,name:"Prithvi",score:99.5},
    {id:3,name:"Divyanshi",score:26},
    {id:4,name:"Aarti",score:11}
  ]

  const [students,setStudents] = useState(initialStudents)

  const updateScore = (index,newScore)=>{
    const updated = students.map((s,i)=>
      i === index ? {...s, score:Number(newScore)} : s
    )

    setStudents(updated)
  }

  return (
    <div className='w-full flex flex-col items-center gap-10 p-20 h-full bg-gray-900'>
    <Heading/>
    <AddStudent students={students} setStudents={setStudents}/>
    <StudentsSummary students={students}/>   {/* 🔥 important */}
    <AllDetails students={students} updateScore={updateScore}/>
    </div>
  )
}

export default App

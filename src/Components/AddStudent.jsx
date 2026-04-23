import { useState } from "react"

function AddStudent({students,setStudents}) {

    const [newStudent,setNewStudent] = useState({
        id:"",
        name:"",
        score:""
    })

    const handleNameChange = (value)=>{
        setNewStudent(s=>({
            ...s,
            name:value
        }))
    }

    const handleScoreChange = (value)=>{
        setNewStudent(s=>({
            ...s,
            score:Number(value)   // 🔥 important
        }))
    }

    const submitStudent = ()=>{
        const studentWithId = {
            ...newStudent,
            id: Date.now()   // 🔥 unique id
        }

        setStudents(prev => [...prev, studentWithId])

        setNewStudent({
            id:"",
            name:"",
            score:""
        })
    }

  return (
    <div>
        <div className="w-200 flex flex-col">
            <div className="flex justify-between items-center text-[#256594] border-1 border-[#256594] border-b-0 py-3 px-4">
                <div className="w-35 text-s flex justify-between items-center">
                <span className="inline-block rounded-full w-3 h-3 bg-[#00FFE0]"></span>
                <h4>Register Student</h4>
                </div>
                <span className="text-xs">NEW ENTRY</span>
            </div>

            <div className="text-[#256594] flex border-0">
                <input type="text" placeholder="STUDENT NAME" className="flex-1 p-5 border-1 outline-0" value={newStudent.name} onChange={(e)=>handleNameChange(e.target.value)}/>
                <input type="text" placeholder="SCORE (0-100)"  className="flex-1 p-5 border-1  outline-0" value={newStudent.score} onChange={(e)=>handleScoreChange(e.target.value)}/>
                <button className="w-30 p-5 border-1 cursor-pointer border-t-[#256594] hover:bg-[#00FFE0]" onClick={submitStudent}>+ ADD</button>
            </div>
        </div>
    </div>
  )
}

export default AddStudent

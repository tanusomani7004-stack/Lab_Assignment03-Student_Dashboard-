import { useEffect, useState } from "react";

function AllDetails({students, updateScore}) {

  const [inputs, setInputs] = useState(students.map(s => s.score));

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  useEffect(() => {
    setInputs(students.map(s => s.score));
  }, [students]);

  return (
    <div className="w-200">
      
      {/* 🔥 Header */}
      <div className="flex border border-[#256594] p-2 justify-between items-center">
        <span className="text-[#256594] text-xs">STUDENT RECORDS</span>
        <span className="text-[#256594] text-xs">
          {students.length} Entries   {/* 🔥 dynamic */}
        </span>
      </div>

      {/* 🔥 Table */}
      <table className="w-full border border-[#256594] border-collapse">
        <thead>
          <tr className="text-[#256594]">
            <th className="text-left p-3 border-b border-[#256594]">Name</th>
            <th className="text-left p-3 border-b border-[#256594]">Score</th>
            <th className="text-left p-3 border-b border-[#256594]">Status</th>
            <th className="text-left p-3 border-b border-[#256594]">Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item, index) => {
            return (
              <tr key={item.id} className="text-[#256594]">
                
                {/* Name */}
                <td className="p-3">{item.name}</td>

                {/* Score */}
                <td className="p-3">{item.score}</td>

                {/* Status */}
                <td className="p-3">
                  {item.score >= 40 ? (
                    <div className="flex items-center gap-1 w-20 p-1 px-2 text-sm text-green-600 border border-green-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>Pass</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 w-20 p-1 px-2 text-sm text-red-600 border border-red-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      <span>Fail</span>
                    </div>
                  )}
                </td>

                {/* Update */}
                <td className="p-3 flex gap-3 items-center">
                  <input
                    type="number"   // 🔥 number type
                    value={inputs[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-16 p-1 px-2 outline-none border border-[#00FFE71A] text-gray-200"
                  />

                  <button
                    className="border border-[#256594] px-3 py-1 cursor-pointer hover:bg-[#00FFE71A] hover:text-[#00FFE0]"
                    onClick={() => updateScore(index, inputs[index])}
                  >
                    Save
                  </button>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllDetails;

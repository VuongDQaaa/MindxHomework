import { useState } from "react";

export const ToDoList = () => {
  const [jobsList, setJobsList] = useState([]);
  const [job, setJob] = useState("");
  let countJobs = jobsList.length;

  const handleSubmit = () => {
    if(job !== "")
    {
        const newJobsList = [...jobsList];
        newJobsList.push(job);
        setJobsList(newJobsList);
    }
    setJob("");
  };

  return (
    <div className="to-do-list">
      <div className="wraper">
        <div className="input-data">
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>

      <div className="job-list">
        <ul>
          {jobsList.map((job, index) => (
            <li key = {index}>
              <input type="radio" />
              {job}
            </li>
          ))}
        </ul>
      </div>

      <div className="notification">
        <div> there are {countJobs} job left</div>
      </div>
    </div>
  );
};

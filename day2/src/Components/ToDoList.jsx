import { useState } from "react";

export const ToDoList = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJobs);
    return storageJobs;
  });
  //let countJobs = jobs.count;
  //console.log(count);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      //save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="to-do-list">
      <div className="wraper">
        <div className="input-data">
          <input type="text" value={job} onChange={(e) => setJob(e.target.value)} required/>
          <button onClick={handleSubmit}>Add</button>
        </div>
      </div>
      

      <div className="job-list">
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <input type="radio" />
              {job}
            </li>
          ))}
        </ul>
      </div>

      <div className="notification">
        <div> there are ... job left</div>
      </div>
    </div>
  );
};

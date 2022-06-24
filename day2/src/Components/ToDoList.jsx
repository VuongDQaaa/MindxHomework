import { useState } from "react"

export const ToDoList = () => {
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState('');

    const handleSubmit = () => {
        setJobs (prev => [...prev, job]);
        setJob('');
    }

    return (
        <div className="Input">
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            <div>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            <input type="radio" />
                            {job}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
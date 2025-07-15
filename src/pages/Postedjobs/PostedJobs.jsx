// import React, { useState, useEffect } from "react";
// function LocalStorageExample() {
//   const [name, setName] = useState("");
//   const [savedNames, setSavedNames] = useState([]);

//   //load save name from localstorage when component mount
//   useEffect(() => {
//     const storedName = localStorage.getItem("usernames");
//     if (storedName) {
//       setSavedNames(JSON.parse(storedName));
//     }
//   }, []);
//   //save name to local storage when button is clicked

//   const saveName = () => {
//     const trimmedName = name.trim();
//     if (!trimmedName) return; // Avoid empty or whitespace names

//     // Create updated array
//     const updatedNames = [...savedNames, trimmedName];

//     // Save updated array to localStorage
//     localStorage.setItem("usernames", JSON.stringify(updatedNames));

//     // Update state to trigger re-render
//     setSavedNames(updatedNames);

//     // Clear input
//     setName("");
//   };

//   // Remove saved name from localStorage
//   const clearName = () => {
//     localStorage.removeItem("userName");
//     setSavedNames("");
//   };
//   return (
//     <div>
//       <h2>local storage demo</h2>
//       <p>saved name :{savedNames || "no name found"}</p>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={saveName}>Save Name</button>
//       <button onClick={clearName}>Clear Saved Name</button>
//       <h3>Saved Names:</h3>
//       {savedNames.length === 0 ? (
//         <p>No names saved yet.</p>
//       ) : (
//         <ul>
//           {savedNames.map((savedName, index) => (
//             <li key={index}>{savedName}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// export default LocalStorageExample;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, DollarSign, Search, User } from "lucide-react";
import "./PostedJobs.scss";

const PostedJobsPage = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchJobs = () => {
      const jobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
      setPostedJobs(jobs);
      setLoading(false);
    };
    fetchJobs();
  }, []);

  const filteredJobs = postedJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const normalizedStatus = (job.status || "").toLowerCase();
    const matchesFilter =
      filter === "all" || normalizedStatus === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (jobId, newStatus) => {
    const updatedJobs = postedJobs.map((job) =>
      job.id === jobId ? { ...job, status: newStatus } : job
    );
    setPostedJobs(updatedJobs);
    localStorage.setItem("postedJobs", JSON.stringify(updatedJobs));
  };

  if (loading) return <div className="posted-jobs-page">Loading...</div>;

  return (
    <div className="posted-jobs-page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Your Posted Jobs</h1>
          <p>Manage and track all your posted projects</p>
        </div>

        {/* Controls */}
        <div className="controls">
          <div className="left-controls">
            <div className="search-bar">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="right-controls">
            <div className="filter-tabs">
              {["all", "Active", "Completed"].map((status) => (
                <button
                  key={status}
                  className={filter === status ? "active" : ""}
                  onClick={() => setFilter(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="jobs-list">
          {filteredJobs.length === 0 ? (
            <div className="empty-state">
              <p>
                No jobs found. <Link to="/postjob">Post a new job</Link>
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className={`status ${job.status?.toLowerCase() || ""}`}>
                    {job.status}
                  </span>
                </div>

                <div className="job-details">
                  <p className="description">
                    {job.description.length > 150
                      ? job.description.substring(0, 150) + "..."
                      : job.description}
                  </p>

                  <div className="meta">
                    <span>
                      <DollarSign size={16} /> {job.budget}
                    </span>
                    <span>
                      <Clock size={16} /> {job.timeline}
                    </span>
                    <span>
                      <User size={16} /> {job.clientName || "Unknown"}
                    </span>
                    <span>
                      Posted on:{" "}
                      {job.postedDate
                        ? new Date(job.postedDate).toLocaleDateString()
                        : "N/A"}
                    </span>
                    <span>Category: {job.category}</span>
                  </div>
                </div>

                <div className="job-actions">
                  <Link to={`/job/${job.id}`} className="btn-view">
                    View Details
                  </Link>
                  {job.status?.toLowerCase() === "active" && (
                    <button
                      onClick={() => handleStatusChange(job.id, "Completed")}
                      className="btn-complete"
                    >
                      Mark as Completed
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PostedJobsPage;

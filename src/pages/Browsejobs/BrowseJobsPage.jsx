import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DollarSign, Clock, Search } from "lucide-react";
import "./BrowseJobs.scss";

const BrowseJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Simulate fetching all posted jobs from localStorage or API
    const allJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    setJobs(allJobs);
    setLoading(false);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const normalizedStatus = (job.status || "").toLowerCase();
    const matchesFilter =
      filter === "all" || normalizedStatus === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  if (loading) return <div className="browse-jobs-page">Loading...</div>;

  return (
    <div className="browse-jobs-page">
      <div className="container">
        <div className="header">
          <h1>Browse Jobs</h1>
          <p>Find projects and apply to jobs posted by clients</p>
        </div>

        <div className="controls">
          <div className="left-controls">
            <div className="search-bar">
              <Search />
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
              <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={filter === "active" ? "active" : ""}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
          </div>
        </div>

        <div className="jobs-list">
          {filteredJobs.length === 0 ? (
            <div className="empty-state">
              <p>No jobs found.</p>
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
                      <DollarSign /> {job.budget}
                    </span>
                    <span>
                      <Clock /> {job.timeline}
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
                      className="btn-apply"
                      onClick={() => alert("Apply functionality coming soon!")}
                    >
                      Apply
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

export default BrowseJobsPage;

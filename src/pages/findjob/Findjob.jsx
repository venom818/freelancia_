import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Clock, Send, TrendingUp, X } from "lucide-react"
import "./Findjob.scss"

const Findjob = () => {
  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [bidAmount, setBidAmount] = useState("")
  const [timeline, setTimeline] = useState("")
  const [coverLetter, setCoverLetter] = useState("")
  const [milestones, setMilestones] = useState("")

  const [showBidModal, setShowBidModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    // Fetch jobs from API or database here
    // For now, i am suing just dummy data
    const dummyJobs = [
      {
        id: 1,
        title: "React Developer Needed",
        description: "Looking for a skilled React developer to build a user interface.",
        budget: 5000,
        duration: "1 month",
        skills: ["React", "JavaScript", "CSS"],
        location: "Remote",
        postedTime: "2 hours ago",
        proposals: 12,
        client: {
          name: "TechCorp Inc.",
          rating: 4.8,
          jobsPosted: 15,
        },
      },
      {
        id: 2,
        title: "Node.js Backend Engineer",
        description: "We need a backend engineer proficient in Node.js and Express.",
        budget: 7000,
        duration: "2 months",
        skills: ["Node.js", "Express", "MongoDB"],
        location: "New York",
        postedTime: "5 hours ago",
        proposals: 8,
        client: {
          name: "StartupXYZ",
          rating: 4.6,
          jobsPosted: 3,
        },
      },
      {
        id: 3,
        title: "Mobile App Developer (React Native)",
        description: "Seeking a mobile app developer with experience in React Native.",
        budget: 6000,
        duration: "6 weeks",
        skills: ["React Native", "Mobile Development", "iOS", "Android"],
        location: "San Francisco",
        postedTime: "1 day ago",
        proposals: 15,
        client: {
          name: "MobileFirst Co.",
          rating: 4.9,
          jobsPosted: 8,
        },
      },
    ]
    setJobs(dummyJobs)
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSubmitProposal = (e, job) => {
    e.preventDefault()
    // Handle proposal submission logic here
    // console.log("Submitting proposal for job:", job.title)
    // console.log("Bid Amount:", bidAmount)
    // console.log("Timeline:", timeline)
    // console.log("Cover Letter:", coverLetter)
    // console.log("Milestones:", milestones)
    setShowBidModal(false)
    // Reset form fields
    setBidAmount("")
    setTimeline("")
    setCoverLetter("")
    setMilestones("")
  }

  const handlePlaceBid = (job) => {
    setSelectedJob(job)
    setShowBidModal(true)
  }

  return (
    <div className="find-job-page">
      <div className="find-job-container">
        {/* Header */}
        <div className="find-job-header">
          <h1 className="find-job-title">Find Jobs</h1>
          <p className="find-job-subtitle">Discover amazing projects that match your skills</p>
        </div>

        {/* Search Bar */}
        <div className="find-job-search">
          <Input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        {/* Job Cards Grid */}
        <div className="find-job-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <h2 className="job-title">{job.title}</h2>
                <div className="job-meta">
                  <span className="job-meta-item">
                    <Clock className="job-icon" />
                    {job.postedTime}
                  </span>
                  <span className="job-meta-item">
                    <DollarSign className="job-icon" />${job.budget}
                  </span>
                </div>
              </div>
              <div className="job-card-body">
                <p className="job-description">{job.description}</p>

                <div className="job-skills">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="job-details">
                  <div className="job-detail-item">
                    <Clock className="job-icon" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="job-detail-item">
                    <span className="location-icon">📍</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail-item">
                    <span className="proposals-count">{job.proposals} proposals</span>
                  </div>
                </div>

                <div className="client-info">
                  <div className="client-details">
                    <h4 className="client-name">{job.client.name}</h4>
                    <div className="client-stats">
                      <span>⭐ {job.client.rating}</span>
                      <span>{job.client.jobsPosted} jobs posted</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="job-card-footer">
                <Button onClick={() => handlePlaceBid(job)} className="bid-button">
                  <TrendingUp className="button-icon" />
                  Place Bid
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="no-results">
            <div className="no-results-content">
              <h3>No jobs found</h3>
              <p>Try adjusting your search terms</p>
            </div>
          </div>
        )}

        {/* Bid Modal */}
        {showBidModal && selectedJob && (
          <div className="modal-overlay" onClick={() => setShowBidModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Submit Proposal</h2>
                <button onClick={() => setShowBidModal(false)} className="close-button">
                  <X className="close-icon" />
                </button>
              </div>

              <div className="modal-body">
                <div className="project-summary">
                  <h3 className="project-title">{selectedJob.title}</h3>
                  <p className="project-description">{selectedJob.description}</p>
                  <div className="project-meta">
                    <span className="project-budget">
                      <DollarSign className="meta-icon" />${selectedJob.budget}
                    </span>
                    <span className="project-duration">
                      <Clock className="meta-icon" />
                      {selectedJob.duration}
                    </span>
                  </div>
                </div>

                <form onSubmit={(e) => handleSubmitProposal(e, selectedJob)} className="proposal-form">
                  {/* Bid Amount Section */}
                  <div className="bidding-section">
                    <Label className="form-label">Your Bid Amount</Label>
                    <div className="bid-input-container">
                      <Input
                        type="number"
                        placeholder="Enter your bid"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="bid-input"
                        required
                      />
                      <div className="bid-recommendations">
                        <div className="bid-suggestions">
                          <button
                            type="button"
                            className="suggestion-button"
                            onClick={() => setBidAmount(Math.floor(selectedJob.budget * 0.8).toString())}
                          >
                            <TrendingUp className="suggestion-icon" />
                            Competitive: ${Math.floor(selectedJob.budget * 0.8)}
                          </button>
                          <button
                            type="button"
                            className="suggestion-button"
                            onClick={() => setBidAmount(Math.floor(selectedJob.budget * 0.9).toString())}
                          >
                            Average: ${Math.floor(selectedJob.budget * 0.9)}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="form-group">
                    <Label className="form-label">Project Timeline</Label>
                    <Select value={timeline} onValueChange={setTimeline}>
                      <SelectTrigger className="select-trigger">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3 days">1-3 days</SelectItem>
                        <SelectItem value="1 week">1 week</SelectItem>
                        <SelectItem value="2 weeks">2 weeks</SelectItem>
                        <SelectItem value="1 month">1 month</SelectItem>
                        <SelectItem value="2-3 months">2-3 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Cover Letter */}
                  <div className="form-group">
                    <Label className="form-label">Cover Letter</Label>
                    <Textarea
                      placeholder="Explain why you're the best fit for this project..."
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      rows={6}
                      className="form-textarea"
                      required
                    />
                  </div>

                  {/* Milestones */}
                  <div className="form-group">
                    <Label className="form-label">Project Milestones (Optional)</Label>
                    <Textarea
                      placeholder="Break down your project into milestones..."
                      value={milestones}
                      onChange={(e) => setMilestones(e.target.value)}
                      rows={4}
                      className="form-textarea"
                    />
                  </div>
                  <div className="form-actions">
                    <button type="button" onClick={() => setShowBidModal(false)} className="cancel-button">
                      Cancel
                    </button>
                    <button type="submit" className="submit-button">
                      <Send className="button-icon" />
                      Submit Proposal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Findjob

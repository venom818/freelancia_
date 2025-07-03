// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useToast } from "../../hooks/useToast"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Upload, DollarSign, Clock, Users, CheckCircle, ArrowRight, Star } from "lucide-react"
// import "./Postjob.scss"

// const PostProjectPage = () => {
//   const navigate = useNavigate()
//   const { showToast } = useToast()
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [postedProject, setPostedProject] = useState(null)
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     skills: "",
//     description: "",
//     budgetType: "fixed",
//     minBudget: "",
//     maxBudget: "",
//     timeline: "",
//     experienceLevel: "intermediate",
//     featured: false,
//     urgent: false,
//     sealed: false,
//     attachments: [],
//   })

//   const [errors, setErrors] = useState({})

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }))
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }))
//     }
//   }
//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.title.trim()) {
//       newErrors.title = "Project title is required"
//     } else if (formData.title.length < 10) {
//       newErrors.title = "Title must be at least 10 characters"
//     }

//     if (!formData.category) {
//       newErrors.category = "Please select a category"
//     }

//     if (!formData.description.trim()) {
//       newErrors.description = "Project description is required"
//     } else if (formData.description.length < 50) {
//       newErrors.description = "Description must be at least 50 characters"
//     }

//     if (!formData.minBudget || !formData.maxBudget) {
//       newErrors.budget = "Budget range is required"
//     } else if (Number.parseInt(formData.minBudget) >= Number.parseInt(formData.maxBudget)) {
//       newErrors.budget = "Maximum budget must be greater than minimum budget"
//     }

//     if (!formData.timeline) {
//       newErrors.timeline = "Project timeline is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const calculateTotalCost = () => {
//     let total = 0
//     if (formData.featured) total += 19
//     if (formData.urgent) total += 9
//     return total
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       showToast("Please fix the errors in the form", "error")
//       return
//     }

//     setIsSubmitting(true)

//     try {
//       // Get current user
//       const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}")

//       if (!currentUser.id) {
//         showToast("Please log in to post a project", "error")
//         navigate("/login")
//         return
//       }

//       // Create new project object
//       const newProject = {
//         id: Date.now(), // Simple ID generation
//         title: formData.title,
//         description: formData.description,
//         category: formData.category,
//         skills: formData.skills
//           .split(",") //split by comma
//           .map((skill) => skill.trim()) // remove white space
//           .filter((skill) => skill), //remove empty strings
//         budget: `$${formData.minBudget} - $${formData.maxBudget}`,
//         budgetType: formData.budgetType,
//         minBudget: Number.parseInt(formData.minBudget),
//         maxBudget: Number.parseInt(formData.maxBudget),
//         timeline: formData.timeline,
//         experienceLevel: formData.experienceLevel,
//         status: "Active",
//         postedDate: new Date().toISOString(),
//         proposals: 0,
//         clientId: currentUser.id,
//         clientName: `${currentUser.firstName} ${currentUser.lastName}`,
//         featured: formData.featured,
//         urgent: formData.urgent,
//         sealed: formData.sealed,
//         attachments: formData.attachments,
//         deadline: getDeadlineFromTimeline(formData.timeline),
//       }

//       // Get existing posted jobs from localStorage
//       const existingJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")

//       // Add new project to the list
//       const updatedJobs = [newProject, ...existingJobs]

//       // Save back to localStorage
//       localStorage.setItem("postedJobs", JSON.stringify(updatedJobs))

//       // Update user's posted projects count
//       const updatedUser = {
//         ...currentUser,
//         totalProjectsPosted: (currentUser.totalProjectsPosted || 0) + 1,
//       }
//       localStorage.setItem("currentUser", JSON.stringify(updatedUser))

//       // Simulate API delay
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       // Set posted project and show success
//       setPostedProject(newProject)
//       setShowSuccess(true)
//       showToast("Project posted successfully!", "success")
//     } catch (error) {
//       console.error("Error posting project:", error)
//       showToast("Failed to post project. Please try again.", "error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const getDeadlineFromTimeline = (timeline) => {
//     const now = new Date()
//     switch (timeline) {
//       case "asap":
//         return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString() // 1 week
//       case "1-2weeks":
//         return new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString() // 2 weeks
//       case "1month":
//         return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString() // 1 month
//       case "2-3months":
//         return new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000).toISOString() // 3 months
//       case "3+months":
//         return new Date(now.getTime() + 120 * 24 * 60 * 60 * 1000).toISOString() // 4 months
//       default:
//         return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString() // Default 1 month
//     }
//   }

//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files)
//     setFormData((prev) => ({
//       ...prev,
//       attachments: [...prev.attachments, ...files],
//     }))
//   }

//   const removeAttachment = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       attachments: prev.attachments.filter((_, i) => i !== index),
//     }))
//   }

//   const handleViewProfile = () => {
//     navigate("/client-profile")
//   }

//   const handlePostAnother = () => {
//     setShowSuccess(false)
//     setPostedProject(null)
//     setFormData({
//       title: "",
//       category: "",
//       skills: "",
//       description: "",
//       budgetType: "fixed",
//       minBudget: "",
//       maxBudget: "",
//       timeline: "",
//       experienceLevel: "intermediate",
//       featured: false,
//       urgent: false,
//       sealed: false,
//       attachments: [],
//     })
//     setErrors({})
//   }

//   // Success Page
//   if (showSuccess && postedProject) {
//     return (
//       <div className="post-project-page">
//         <div className="success-container">
//           <Card className="success-card">
//             <CardContent className="success-content">
//               <div className="success-icon">
//                 <CheckCircle className="icon" />
//               </div>
//               <h1 className="success-title">Project Posted Successfully!</h1>
//               <p className="success-subtitle">
//                 Your project is now live and freelancers can start submitting proposals.
//               </p>

//               <div className="project-summary">
//                 <h3>Project Summary</h3>
//                 <div className="summary-item">
//                   <span className="label">Title:</span>
//                   <span className="value">{postedProject.title}</span>
//                 </div>
//                 <div className="summary-item">
//                   <span className="label">Budget:</span>
//                   <span className="value">{postedProject.budget}</span>
//                 </div>
//                 <div className="summary-item">
//                   <span className="label">Timeline:</span>
//                   <span className="value">{postedProject.timeline}</span>
//                 </div>
//                 <div className="summary-item">
//                   <span className="label">Category:</span>
//                   <span className="value">{postedProject.category}</span>
//                 </div>
//                 <div className="summary-item">
//                   <span className="label">Project ID:</span>
//                   <span className="value">#{postedProject.id}</span>
//                 </div>
//               </div>

//               <div className="success-stats">
//                 <div className="stat">
//                   <Star className="icon" />
//                   <span>Your project will be featured to top freelancers</span>
//                 </div>
//                 <div className="stat">
//                   <Users className="icon" />
//                   <span>Expect proposals within 24 hours</span>
//                 </div>
//                 <div className="stat">
//                   <Clock className="icon" />
//                   <span>Average response time: 2-4 hours</span>
//                 </div>
//               </div>

//               <div className="success-actions">
//                 <Button onClick={handleViewProfile} className="primary-btn">
//                   <Users className="icon" />
//                   View My Profile
//                   <ArrowRight className="icon" />
//                 </Button>
//                 <Button onClick={handlePostAnother} variant="outline" className="secondary-btn">
//                   Post Another Project
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="post-project-page">
//       <div className="post-project-container">
//         {/* Header */}
//         <div className="post-project-header">
//           <h1 className="post-project-title">Post a Project</h1>
//           <p className="post-project-subtitle">Tell us what you need done and receive free quotes from freelancers</p>
//         </div>

//         <form onSubmit={handleSubmit} className="post-project-form">
//           <div className="form-grid">
//             {/* Main Form */}
//             <div className="form-section">
//               <Card className="form-card">
//                 <CardHeader>
//                   <CardTitle>Project Details</CardTitle>
//                   <CardDescription>Provide details about your project to attract the right freelancers</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   {/* Project Title */}
//                   <div className="form-group">
//                     <Label htmlFor="title">Project Title *</Label>
//                     <Input
//                       id="title"
//                       placeholder="e.g. Build a responsive website for my business"
//                       className={errors.title ? "error" : ""}
//                       value={formData.title}
//                       onChange={(e) => handleInputChange("title", e.target.value)}
//                     />
//                     {errors.title && <span className="error-text">{errors.title}</span>}
//                     <span className="helper-text">A clear, descriptive title helps attract the right freelancers</span>
//                   </div>

//                   {/* Category */}
//                   <div className="form-group">
//                     <Label htmlFor="category">Category *</Label>
//                     <Select onValueChange={(value) => handleInputChange("category", value)}>
//                       <SelectTrigger className={errors.category ? "error" : ""}>
//                         <SelectValue placeholder="Select a category" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="web-development">Web Development</SelectItem>
//                         <SelectItem value="mobile-development">Mobile Development</SelectItem>
//                         <SelectItem value="design">Design & Creative</SelectItem>
//                         <SelectItem value="writing">Writing & Translation</SelectItem>
//                         <SelectItem value="marketing">Digital Marketing</SelectItem>
//                         <SelectItem value="data">Data Science & Analytics</SelectItem>
//                         <SelectItem value="admin">Admin Support</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     {errors.category && <span className="error-text">{errors.category}</span>}
//                   </div>

//                   {/* Skills Required */}
//                   <div className="form-group">
//                     <Label htmlFor="skills">Skills Required</Label>
//                     <Input
//                       id="skills"
//                       placeholder="e.g. React, Node.js, MongoDB"
//                       value={formData.skills}
//                       onChange={(e) => handleInputChange("skills", e.target.value)}
//                     />
//                     <span className="helper-text">Add skills separated by commas</span>
//                   </div>

//                   {/* Project Description */}
//                   <div className="form-group">
//                     <Label htmlFor="description">Project Description *</Label>
//                     <Textarea
//                       id="description"
//                       placeholder="Describe your project in detail. Include what you want to achieve, any specific requirements, and what deliverables you expect..."
//                       className={errors.description ? "error" : ""}
//                       value={formData.description}
//                       onChange={(e) => handleInputChange("description", e.target.value)}
//                       rows={6}
//                     />
//                     {errors.description && <span className="error-text">{errors.description}</span>}
//                     <span className="helper-text">Minimum 50 characters ({formData.description.length}/50)</span>
//                   </div>

//                   {/* File Attachments */}
//                   <div className="form-group">
//                     <Label>Attachments (Optional)</Label>
//                     <div className="file-upload">
//                       <Upload className="upload-icon" />
//                       <p>Drag and drop files here or click to browse</p>
//                       <span className="file-info">Supported: PDF, DOC, PNG, JPG (Max 10MB)</span>
//                       <input
//                         type="file"
//                         multiple
//                         accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
//                         onChange={handleFileUpload}
//                         style={{ display: "none" }}
//                         id="file-upload"
//                       />
//                       <Button
//                         type="button"
//                         variant="outline"
//                         onClick={() => document.getElementById("file-upload").click()}
//                       >
//                         Choose Files
//                       </Button>
//                     </div>

//                     {formData.attachments.length > 0 && (
//                       <div className="uploaded-files">
//                         {formData.attachments.map((file, index) => (
//                           <div key={index} className="file-item">
//                             <span>{file.name}</span>
//                             <Button type="button" variant="ghost" size="sm" onClick={() => removeAttachment(index)}>
//                               Remove
//                             </Button>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Budget */}
//                   <div className="form-group">
//                     <Label>Budget *</Label>
//                     <RadioGroup
//                       value={formData.budgetType}
//                       onValueChange={(value) => handleInputChange("budgetType", value)}
//                       className="budget-type"
//                     >
//                       <div className="radio-item">
//                         <RadioGroupItem value="fixed" id="fixed" />
//                         <Label htmlFor="fixed">Fixed Price Project</Label>
//                       </div>
//                       <div className="radio-item">
//                         <RadioGroupItem value="hourly" id="hourly" />
//                         <Label htmlFor="hourly">Hourly Rate</Label>
//                       </div>
//                     </RadioGroup>
//                     <div className="budget-inputs">
//                       <div className="budget-input">
//                         <Label htmlFor="min-budget">Minimum Budget</Label>
//                         <div className="input-with-icon">
//                           <DollarSign className="icon" />
//                           <Input
//                             id="min-budget"
//                             placeholder="500"
//                             type="number"
//                             className={errors.budget ? "error" : ""}
//                             value={formData.minBudget}
//                             onChange={(e) => handleInputChange("minBudget", e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="budget-input">
//                         <Label htmlFor="max-budget">Maximum Budget</Label>
//                         <div className="input-with-icon">
//                           <DollarSign className="icon" />
//                           <Input
//                             id="max-budget"
//                             placeholder="2000"
//                             type="number"
//                             className={errors.budget ? "error" : ""}
//                             value={formData.maxBudget}
//                             onChange={(e) => handleInputChange("maxBudget", e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     {errors.budget && <span className="error-text">{errors.budget}</span>}
//                   </div>

//                   {/* Timeline */}
//                   <div className="form-group">
//                     <Label htmlFor="timeline">Project Timeline *</Label>
//                     <Select onValueChange={(value) => handleInputChange("timeline", value)}>
//                       <SelectTrigger className={errors.timeline ? "error" : ""}>
//                         <SelectValue placeholder="Select timeline" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="asap">ASAP (Less than 1 week)</SelectItem>
//                         <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
//                         <SelectItem value="1month">1 month</SelectItem>
//                         <SelectItem value="2-3months">2-3 months</SelectItem>
//                         <SelectItem value="3+months">3+ months</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     {errors.timeline && <span className="error-text">{errors.timeline}</span>}
//                   </div>

//                   {/* Experience Level */}
//                   <div className="form-group">
//                     <Label>Freelancer Experience Level *</Label>
//                     <RadioGroup
//                       value={formData.experienceLevel}
//                       onValueChange={(value) => handleInputChange("experienceLevel", value)}
//                       className="experience-level"
//                     >
//                       <div className="radio-item">
//                         <RadioGroupItem value="entry" id="entry" />
//                         <Label htmlFor="entry">Entry Level ($10-30/hr)</Label>
//                       </div>
//                       <div className="radio-item">
//                         <RadioGroupItem value="intermediate" id="intermediate" />
//                         <Label htmlFor="intermediate">Intermediate ($30-60/hr)</Label>
//                       </div>
//                       <div className="radio-item">
//                         <RadioGroupItem value="expert" id="expert" />
//                         <Label htmlFor="expert">Expert ($60+/hr)</Label>
//                       </div>
//                     </RadioGroup>
//                   </div>

//                   {/* Additional Options */}
//                   <div className="form-group">
//                     <Label>Additional Options</Label>
//                     <div className="additional-options">
//                       <div className="checkbox-item">
//                         <Checkbox
//                           id="featured"
//                           checked={formData.featured}
//                           onCheckedChange={(checked) => handleInputChange("featured", checked)}
//                         />
//                         <Label htmlFor="featured">Make this project featured (+$19)</Label>
//                       </div>
//                       <div className="checkbox-item">
//                         <Checkbox
//                           id="urgent"
//                           checked={formData.urgent}
//                           onCheckedChange={(checked) => handleInputChange("urgent", checked)}
//                         />
//                         <Label htmlFor="urgent">Mark as urgent (+$9)</Label>
//                       </div>
//                       <div className="checkbox-item">
//                         <Checkbox
//                           id="sealed"
//                           checked={formData.sealed}
//                           onCheckedChange={(checked) => handleInputChange("sealed", checked)}
//                         />
//                         <Label htmlFor="sealed">Sealed bidding (Hide bids from other freelancers)</Label>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Cost Summary */}
//                   {(formData.featured || formData.urgent) && (
//                     <div className="cost-summary">
//                       <h4>Additional Costs</h4>
//                       {formData.featured && <p>Featured listing: $19</p>}
//                       {formData.urgent && <p>Urgent marking: $9</p>}
//                       <p className="total">Total additional cost: ${calculateTotalCost()}</p>
//                     </div>
//                   )}

//                   {/* Submit Button */}
//                   <div className="submit-section">
//                     <Button type="submit" size="lg" className="submit-btn" disabled={isSubmitting}>
//                       {isSubmitting ? (
//                         <>
//                           <div className="spinner"></div>
//                           Posting Project...
//                         </>
//                       ) : (
//                         <>
//                           <CheckCircle className="icon" />
//                           Post Project
//                         </>
//                       )}
//                     </Button>
//                     <p className="agreement">By posting, you agree to our Terms of Service and Privacy Policy</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Sidebar */}
//             <div className="sidebar">
//               {/* Tips Card */}
//               <Card className="tips-card">
//                 <CardHeader>
//                   <CardTitle>Tips for Success</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="tip">
//                     <div className="tip-icon blue">
//                       <Users className="icon" />
//                     </div>
//                     <div className="tip-content">
//                       <h4>Be Specific</h4>
//                       <p>Clear requirements attract better proposals</p>
//                     </div>
//                   </div>
//                   <div className="tip">
//                     <div className="tip-icon green">
//                       <DollarSign className="icon" />
//                     </div>
//                     <div className="tip-content">
//                       <h4>Set Fair Budget</h4>
//                       <p>Competitive budgets get more quality bids</p>
//                     </div>
//                   </div>
//                   <div className="tip">
//                     <div className="tip-icon purple">
//                       <Clock className="icon" />
//                     </div>
//                     <div className="tip-content">
//                       <h4>Realistic Timeline</h4>
//                       <p>Allow adequate time for quality work</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Pricing Card */}
//               <Card className="pricing-card">
//                 <CardHeader>
//                   <CardTitle>How Pricing Works</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="pricing-item">
//                     <span>Project posting</span>
//                     <span className="price">Free</span>
//                   </div>
//                   <div className="pricing-item">
//                     <span>Service fee</span>
//                     <span className="price">3% of project value</span>
//                   </div>
//                   <div className="pricing-item">
//                     <span>Payment processing</span>
//                     <span className="price">2.9% + $0.30</span>
//                   </div>
//                   <div className="pricing-total">
//                     <span>You pay only when satisfied</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default PostProjectPage




import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useToast } from "../../hooks/useToast"
import { CheckCircle, Upload, DollarSign } from "lucide-react"
import "./Postjob.scss"

const PostProjectPage = () => {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [postedProject, setPostedProject] = useState(null)
  
  // Simplified form data
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    minBudget: "",
    maxBudget: "",
    timeline: "",
    experienceLevel: "intermediate",
    featured: false,
    urgent: false,
  })

  const [errors, setErrors] = useState({})

  // Simple input change handler
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  // Simple form validation
  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Project title is required"
    }

    if (!formData.category) {
      newErrors.category = "Please select a category"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required"
    }

    if (!formData.minBudget || !formData.maxBudget) {
      newErrors.budget = "Budget range is required"
    }

    if (!formData.timeline) {
      newErrors.timeline = "Project timeline is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Calculate additional costs
  const getAdditionalCost = () => {
    let total = 0
    if (formData.featured) total += 19
    if (formData.urgent) total += 9
    return total
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error")
      return
    }

    setIsSubmitting(true)

    try {
      // Get current user
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}")

      if (!currentUser.id) {
        showToast("Please log in to post a project", "error")
        navigate("/login")
        return
      }

      // Create new project
      const newProject = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        category: formData.category,
        budget: `$${formData.minBudget} - $${formData.maxBudget}`,
        timeline: formData.timeline,
        experienceLevel: formData.experienceLevel,
        status: "Active",
        postedDate: new Date().toISOString(),
        clientId: currentUser.id,
        clientName: `${currentUser.firstName} ${currentUser.lastName}`,
        featured: formData.featured,
        urgent: formData.urgent,
      }

      // Save to localStorage
      const existingJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")
      const updatedJobs = [newProject, ...existingJobs]
      localStorage.setItem("postedJobs", JSON.stringify(updatedJobs))

      // Update user stats
      const updatedUser = {
        ...currentUser,
        totalProjectsPosted: (currentUser.totalProjectsPosted || 0) + 1,
      }
      localStorage.setItem("currentUser", JSON.stringify(updatedUser))

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      setPostedProject(newProject)
      setShowSuccess(true)
      showToast("Project posted successfully!", "success")
    } catch (error) {
      console.error("Error posting project:", error)
      showToast("Failed to post project. Please try again.", "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form
  const handlePostAnother = () => {
    setShowSuccess(false)
    setPostedProject(null)
    setFormData({
      title: "",
      category: "",
      description: "",
      minBudget: "",
      maxBudget: "",
      timeline: "",
      experienceLevel: "intermediate",
      featured: false,
      urgent: false,
    })
    setErrors({})
  }

  // Success page
  if (showSuccess && postedProject) {
    return (
      <div className="post-project-page">
        <div className="success-container">
          <div className="success-card">
            <div className="success-icon">
              <CheckCircle />
            </div>
            <h1>Project Posted Successfully!</h1>
            <p>Your project is now live and freelancers can start submitting proposals.</p>

            <div className="project-summary">
              <h3>Project Summary</h3>
              <div className="summary-item">
                <span>Title:</span>
                <span>{postedProject.title}</span>
              </div>
              <div className="summary-item">
                <span>Budget:</span>
                <span>{postedProject.budget}</span>
              </div>
              <div className="summary-item">
                <span>Timeline:</span>
                <span>{postedProject.timeline}</span>
              </div>
              <div className="summary-item">
                <span>Project ID:</span>
                <span>#{postedProject.id}</span>
              </div>
            </div>

            <div className="success-actions">
              <button onClick={() => navigate("/dashboard")} className="btn-primary">
                Go to Dashboard
              </button>
              <button onClick={handlePostAnother} className="btn-secondary">
                Post Another Project
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="post-project-page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Post a Project</h1>
          <p>Tell us what you need done and receive free quotes from freelancers</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-grid">
            {/* Main Form */}
            <div className="form-section">
              <div className="form-card">
                <h2>Project Details</h2>
                <p>Provide details about your project to attract the right freelancers</p>

                {/* Project Title */}
                <div className="form-group">
                  <label htmlFor="title">Project Title *</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="e.g. Build a responsive website for my business"
                    className={errors.title ? "error" : ""}
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                  {errors.title && <span className="error-text">{errors.title}</span>}
                </div>

                {/* Category */}
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    className={errors.category ? "error" : ""}
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                  >
                    <option value="">Select a category</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="design">Design & Creative</option>
                    <option value="writing">Writing & Translation</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="data">Data Science & Analytics</option>
                    <option value="admin">Admin Support</option>
                  </select>
                  {errors.category && <span className="error-text">{errors.category}</span>}
                </div>

                {/* Project Description */}
                <div className="form-group">
                  <label htmlFor="description">Project Description *</label>
                  <textarea
                    id="description"
                    placeholder="Describe your project in detail..."
                    className={errors.description ? "error" : ""}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={6}
                  />
                  {errors.description && <span className="error-text">{errors.description}</span>}
                </div>

                {/* Budget */}
                <div className="form-group">
                  <label>Budget *</label>
                  <div className="budget-inputs">
                    <div className="budget-input">
                      <label htmlFor="min-budget">Minimum Budget</label>
                      <div className="input-with-icon">
                        <DollarSign />
                        <input
                          id="min-budget"
                          type="number"
                          placeholder="500"
                          className={errors.budget ? "error" : ""}
                          value={formData.minBudget}
                          onChange={(e) => handleInputChange("minBudget", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="budget-input">
                      <label htmlFor="max-budget">Maximum Budget</label>
                      <div className="input-with-icon">
                        <DollarSign />
                        <input
                          id="max-budget"
                          type="number"
                          placeholder="2000"
                          className={errors.budget ? "error" : ""}
                          value={formData.maxBudget}
                          onChange={(e) => handleInputChange("maxBudget", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {errors.budget && <span className="error-text">{errors.budget}</span>}
                </div>

                {/* Timeline */}
                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline *</label>
                  <select
                    id="timeline"
                    className={errors.timeline ? "error" : ""}
                    value={formData.timeline}
                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Less than 1 week)</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="3+months">3+ months</option>
                  </select>
                  {errors.timeline && <span className="error-text">{errors.timeline}</span>}
                </div>

                {/* Experience Level */}
                <div className="form-group">
                  <label>Freelancer Experience Level</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="experienceLevel"
                        value="entry"
                        checked={formData.experienceLevel === "entry"}
                        onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                      />
                      Entry Level ($10-30/hr)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="experienceLevel"
                        value="intermediate"
                        checked={formData.experienceLevel === "intermediate"}
                        onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                      />
                      Intermediate ($30-60/hr)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="experienceLevel"
                        value="expert"
                        checked={formData.experienceLevel === "expert"}
                        onChange={(e) => handleInputChange("experienceLevel", e.target.value)}
                      />
                      Expert ($60+/hr)
                    </label>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="form-group">
                  <label>Additional Options</label>
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => handleInputChange("featured", e.target.checked)}
                      />
                      Make this project featured (+$19)
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={formData.urgent}
                        onChange={(e) => handleInputChange("urgent", e.target.checked)}
                      />
                      Mark as urgent (+$9)
                    </label>
                  </div>
                </div>

                {/* Cost Summary */}
                {(formData.featured || formData.urgent) && (
                  <div className="cost-summary">
                    <h4>Additional Costs</h4>
                    {formData.featured && <p>Featured listing: $19</p>}
                    {formData.urgent && <p>Urgent marking: $9</p>}
                    <p className="total">Total additional cost: ${getAdditionalCost()}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="submit-section">
                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Posting Project...
                      </>
                    ) : (
                      <>
                        <CheckCircle />
                        Post Project
                      </>
                    )}
                  </button>
                  <p className="agreement">By posting, you agree to our Terms of Service and Privacy Policy</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              {/* Tips Card */}
              <div className="tips-card">
                <h3>Tips for Success</h3>
                <div className="tip">
                  <div className="tip-icon">💡</div>
                  <div className="tip-content">
                    <h4>Be Specific</h4>
                    <p>Clear requirements attract better proposals</p>
                  </div>
                </div>
                <div className="tip">
                  <div className="tip-icon">💰</div>
                  <div className="tip-content">
                    <h4>Set Fair Budget</h4>
                    <p>Competitive budgets get more quality bids</p>
                  </div>
                </div>
                <div className="tip">
                  <div className="tip-icon">⏰</div>
                  <div className="tip-content">
                    <h4>Realistic Timeline</h4>
                    <p>Allow adequate time for quality work</p>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="pricing-card">
                <h3>How Pricing Works</h3>
                <div className="pricing-item">
                  <span>Project posting</span>
                  <span className="price">Free</span>
                </div>
                <div className="pricing-item">
                  <span>Service fee</span>
                  <span className="price">3% of project value</span>
                </div>
                <div className="pricing-item">
                  <span>Payment processing</span>
                  <span className="price">2.9% + $0.30</span>
                </div>
                <div className="pricing-total">
                  <span>You pay only when satisfied</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostProjectPage
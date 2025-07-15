export default function UserTypeSelector({ userType, onChange }) {
  return (
    <div className="user-type-selector">
      <div className="selector-header">
        <span>I want to:</span>
      </div>
      <div className="selector-options">
        {["freelancer", "client"].map((type) => (
          <label
            key={type}
            className={`option ${userType === type ? "active" : ""}`}
          >
            <input
              type="radio"
              name="userType"
              value={type}
              checked={userType === type}
              onChange={(e) => onChange(e.target.value)}
            />
            <div className="option-content">
              <div className="option-icon">
                {type === "freelancer" ? "💼" : "🎯"}
              </div>
              <div className="option-text">
                <span className="title">
                  {type === "freelancer"
                    ? "Work as Freelancer"
                    : "Hire Freelancers"}
                </span>
                <span className="desc">
                  {type === "freelancer"
                    ? "Offer services and earn money"
                    : "Find talent for your projects"}
                </span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

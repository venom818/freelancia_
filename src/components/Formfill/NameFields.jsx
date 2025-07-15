export default function NameFields({
  firstName,
  lastName,
  onChange,
  errors,
  onBlur,
}) {
  return (
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          onBlur={() => onBlur("firstName")}
          required
        />
        {errors.firstName && (
          <small className="error-text">{errors.firstName}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
          onBlur={() => onBlur("lastName")}
          required
        />
        {errors.lastName && (
          <small className="error-text">{errors.lastName}</small>
        )}
      </div>
    </div>
  );
}

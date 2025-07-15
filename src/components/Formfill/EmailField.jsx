export default function EmailField({ email, onChange, error, onBlur }) {
  return (
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => onChange("email", e.target.value)}
        onBlur={onBlur}
        required
      />
      {error && <small className="error-text">{error}</small>}
    </div>
  );
}

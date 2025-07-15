export default function PasswordFields({
  password,
  confirmPassword,
  onChange,
  errors,
  onBlur,
  validatePassword,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Create your password"
          value={password}
          onChange={(e) => onChange("password", e.target.value)}
          onBlur={() => onBlur("password")}
          required
        />
        {errors.password && (
          <small className="error-text">{errors.password}</small>
        )}
        {password && (
          <div className="password-hints">
            {[
              { text: "8+ characters", valid: password.length >= 8 },
              { text: "Uppercase", valid: /[A-Z]/.test(password) },
              { text: "Lowercase", valid: /[a-z]/.test(password) },
              { text: "Number", valid: /[0-9]/.test(password) },
              { text: "Symbol (!@#...)", valid: /[!@#$%^&*]/.test(password) },
            ].map((rule, i) => (
              <span key={i} className={rule.valid ? "valid" : "invalid"}>
                {rule.valid ? "✓" : "✗"} {rule.text}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => onChange("confirmPassword", e.target.value)}
          onBlur={() => onBlur("confirmPassword")}
          required
        />
        {errors.confirmPassword && (
          <small className="error-text">{errors.confirmPassword}</small>
        )}
      </div>
    </>
  );
}

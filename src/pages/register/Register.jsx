import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { register } from "../../api/auth";
import { useRefresh } from "@/contexts/refreshcontext";
import UserTypeSelector from "@/components/Formfill/UserTypeSelector";
import EmailField from "@/components/Formfill/EmailField";
import NameFields from "@/components/Formfill/NameFields";
import PasswordFields from "@/components/Formfill/PasswordFields";
import "./Register.scss";
import { Link } from "react-router-dom";

function Register() {
  const { refreshKey } = useRefresh();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "freelancer",
  });

  const [errors, setErrors] = useState({});
  const [fieldTouched, setFieldTouched] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "freelancer",
    });
    setErrors({});
    setFieldTouched({});
  }, [refreshKey]);

  const validatePassword = (password) => {
    const errors = [];
    if (!password) return ["Password is required"];
    if (password.length < 8) errors.push("at least 8 characters");
    if (!/[A-Z]/.test(password)) errors.push("one uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("one lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("one number");
    if (!/[!@#$%^&*]/.test(password)) errors.push("one special character");
    return errors;
  };

  const validateFields = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";

    const passwordErrors = validatePassword(formData.password);
    if (passwordErrors.length > 0)
      newErrors.password = "Password must have: " + passwordErrors.join(", ");

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (field) => {
    setFieldTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setLoading(true);
    try {
      const response = await register({
        email: formData.email,
        password: formData.password,
        role: formData.userType,
      });

      localStorage.setItem("currentUser", JSON.stringify("freelancer"));
      localStorage.setItem("token", JSON.stringify(response.token));

      showToast(
        "Registration successful! Please complete your profile.",
        "success"
      );

      navigate(
        formData.userType === "freelancer"
          ? "/create-freelancer-profile"
          : "/create-client-profile"
      );
    } catch {
      showToast("Registration failed. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form" noValidate>
          <div className="form-header">
            <h1>Join Freelancia</h1>
            <p>Create your account and start your journey</p>
          </div>

          <UserTypeSelector
            userType={formData.userType}
            onChange={(value) => handleChange("userType", value)}
          />

          <NameFields
            firstName={formData.firstName}
            lastName={formData.lastName}
            onChange={handleChange}
            errors={errors}
            onBlur={handleBlur}
          />

          <EmailField
            email={formData.email}
            onChange={handleChange}
            error={errors.email}
            onBlur={() => handleBlur("email")}
          />

          <PasswordFields
            password={formData.password}
            confirmPassword={formData.confirmPassword}
            onChange={handleChange}
            errors={errors}
            onBlur={handleBlur}
            validatePassword={validatePassword}
          />

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="form-footer">
            <p>
              Already have an account? <Link to="/login">Sign in here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

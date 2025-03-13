import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
    agreeUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create account
        </h2>

        <div className="flex justify-center gap-3 mb-4">
          <button className="p-3 bg-gray-200 rounded-lg">
            <FaFacebook size={24} />
          </button>
          <button className="p-3 bg-gray-200 rounded-lg">
            <FaGithub size={24} />
          </button>
          <button className="p-3 bg-gray-200 rounded-lg">
            <FaGoogle size={24} />
          </button>
        </div>

        <p className="text-center text-gray-600 mb-4">
          Or register with an email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
            required
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreeTerms"
              className="mt-1"
              onChange={handleChange}
              required
            />
            <label className="text-gray-600 text-sm">
              Agree to{" "}
              <a href="#" className="text-blue-600">
                Terms and Conditions
              </a>
              ,{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>{" "}
              & License Agreement
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

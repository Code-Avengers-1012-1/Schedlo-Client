import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SinginForm = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full border-2">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Log in to your account
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
          Or log in with an email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full p-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SinginForm;

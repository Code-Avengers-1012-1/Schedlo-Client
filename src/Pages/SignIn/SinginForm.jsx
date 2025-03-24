import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth/AuthProvider";
import GoogleLogin from "../../Components/SocialLogin/GoogleLogin";
import FaceboolLogin from "../../Components/SocialLogin/FaceboolLogin";
import GithubLogin from "../../Components/SocialLogin/GithubLogin";

const SigninForm = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData.email, formData.password)
      .then((userCredential) => {
        console.log("Logged In -->", userCredential?.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Log in to your account
        </h2>

        <div className="flex justify-center gap-3 mb-4">
          <FaceboolLogin />
          <GithubLogin />
          <GoogleLogin />
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

        <p className="text-center mt-4">
          New here?{" "}
          <Link to="/signup" className="text-violet-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;

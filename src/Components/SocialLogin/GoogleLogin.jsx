import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    console.log("Google Sign-In Button Clicked");

    if (!signInWithGoogle) {
      console.error("signInWithGoogle is not defined in AuthContext.");
      return;
    }

    signInWithGoogle()
      .then((result) => {
        console.log("Google Sign-In Success:", result.user);
        Swal.fire({
          title: `Welcome, ${result.user.displayName || result.user.email}!`,
          text: "You've logged in successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
        alert(error.message);
      });
  };
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault(); // Prevent unexpected form submission issues
          handleGoogleLogin();
        }}
        className="p-3 bg-gray-200 rounded-lg"
      >
        <FaGoogle size={24} />
      </button>
    </>
  );
};

export default GoogleLogin;

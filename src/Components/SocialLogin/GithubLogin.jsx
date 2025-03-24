import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const GithubLogin = () => {
  const { signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGithubLogin = () => {
    console.log("GitHub Sign-In Button Clicked");

    if (!signInWithGithub) {
      console.error("singnInWithGitHub is not defined in AuthContext.");
      return;
    }

    signInWithGithub()
      .then((result) => {
        console.log("GitHub Sign-In Success:", result.user);
        Swal.fire({
          title: `Welcome, ${result.user.displayName || result.user.email}!`,
          text: "You've logged in successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Github Sign-In Error:", error.message);
        alert(error.message);
      });
  };
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault(); // Prevent unexpected form submission issues
          handleGithubLogin();
        }}
        className="p-3 bg-gray-200 rounded-lg"
      >
        <FaGithub size={24} />
      </button>
    </>
  );
};

export default GithubLogin;

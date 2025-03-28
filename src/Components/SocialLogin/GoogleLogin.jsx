/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxios();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    console.log("Google Sign-In Button Clicked");

    if (!signInWithGoogle) {
      console.error("signInWithGoogle is not defined in AuthContext.");
      return;
    }

    signInWithGoogle()
      .then( async (result) => {
        console.log("Google Sign-In Success:", result.user);

        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photo: result?.user?.photoURL,
        };


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

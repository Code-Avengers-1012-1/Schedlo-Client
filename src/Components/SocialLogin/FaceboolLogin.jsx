import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const FaceboolLogin = () => {
  const { signInWithFacebook } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleFacebookLogin = () => {
    console.log("Facebook Sign-In Button Clicked");

    if (!signInWithFacebook) {
      console.error("signInWithFacebook is not defined in AuthContext.");
      return;
    }

    signInWithFacebook()
      .then((result) => {
        console.log("Facebook Sign-In Success:", result.user);
        Swal.fire({
          title: `Welcome, ${result.user.displayName || result.user.email}!`,
          text: "You've logged in successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Facebook Sign-In Error:", error.message);
        alert(error.message);
      });
  };
  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault(); // Prevent unexpected form submission issues
          handleFacebookLogin();
        }}
        className="p-3 bg-gray-200 rounded-lg"
      >
        <FaFacebook size={24} />
      </button>
    </>
  );
};

export default FaceboolLogin;

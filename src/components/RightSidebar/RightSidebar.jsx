import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import swimmingImg from "../../assets/swimming.png";
import playGroundImg from "../../assets/playground.png";

import { use } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const RightSidebar = () => {
  const { signInWithGoogle, signInWithGitHub } = use(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast("You have successfully Login by GoogleSign");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleGitHubLogin = () => {
    signInWithGitHub()
      .then(() => {
        toast("You have successfully Login by GitHubSign");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="space-y-8">
      {/* Login */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Login With</h2>

        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            <FaGoogle />
            Login with Google
          </button>

          <button
            onClick={handleGitHubLogin}
            className="btn btn-outline w-full"
          >
            <FaGithub />
            Login with GitHub
          </button>
        </div>
      </div>

      {/* Find Us On */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Find Us On</h2>

        <div className="border rounded-lg overflow-hidden">
          <a className="flex items-center gap-3 p-4 border-b hover:bg-base-200">
            <FaFacebookF className="text-blue-600" />
            Facebook
          </a>

          <a className="flex items-center gap-3 p-4 border-b hover:bg-base-200">
            <FaTwitter className="text-sky-500" />
            Twitter
          </a>

          <a className="flex items-center gap-3 p-4 hover:bg-base-200">
            <FaLinkedinIn className="text-blue-700" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Q Zone */}
      <div className="bg-base-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>

        <div className="space-y-5">
          <div>
            <img
              src={swimmingImg}
              alt="Swimming"
              className="w-full rounded-lg"
            />
            <p className="text-center mt-2 text-sm font-medium">
              Swimming Training
            </p>
          </div>

          <div>
            <img
              src={playGroundImg}
              alt="Classroom"
              className="w-full rounded-lg"
            />
            <p className="text-center mt-2 text-sm font-medium">
              Smart Classroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

export function LandingPage() {
  const navigate = useNavigate();

  function signUp() {
    navigate("/signup");
  }

  function signIn() {
    navigate("/signin");
  }

  return (
    <div>
        <div>
        </div>
        <div className="h-screen flex flex-col justify-center items-center gap-6 bg-white">
      <div className="w-48">
        <ButtonComponent label="Sign Up" onClick={signUp} />
      </div>
      <div className="w-48">
        <ButtonComponent label="Sign In" onClick={signIn} />
      </div>
    </div>
    </div>
  );
}

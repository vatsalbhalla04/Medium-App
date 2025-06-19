import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/configg";
import ButtonComponent from "./ButtonComponent";
import { toast } from "react-toastify";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signUp() {
    const email = emailRef?.current?.value;
    const name = nameRef?.current?.value;
    const password = passwordRef?.current?.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        email,
        password,
        name,
      });
      toast.success("You have signed up!");
      console.log("Signed Up", response.data);
      navigate("/signin");
    } catch (error) {
      toast.error("Signup failed");
    }
  }

  async function signIn() {
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        password,
      });
      const token = response.data.token; 
      localStorage.setItem("token",token);
      toast.success("Logged in successfully");
      navigate("/blogs");
    } catch (error) {
      toast.error("Signin failed");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 px-4 cursor-default">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800 select-none">
            {type === "signup" ? "Create an account" : "Welcome back"}
          </h1>
          <p className="text-sm text-gray-500">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              {type === "signup" ? "Login" : "Sign up"}
            </Link>
          </p>
        </div>

        <div className="space-y-4">
          <InputBox label="Email" placeholder="Enter Email" ref={emailRef} />
          {type === "signup" && (
            <InputBox label="Name" placeholder="Enter name" ref={nameRef} />
          )}
          <InputBox
            type={"password"}
            label="Password"
            placeholder="Enter Password"
            ref={passwordRef}
          />
        </div>

        <ButtonComponent
          label={type === "signup" ? "Sign Up" : "Sign In"}
          onClick={type === "signup" ? signUp : signIn}
        />
      </div>
    </div>
  );
}

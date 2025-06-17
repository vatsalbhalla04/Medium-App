import { Link } from "react-router-dom";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 cursor-default">
      <div className="max-w-md w-full text-center space-y-4">
        <div className="text-2xl font-semibold tracking-tight">
          Create an account
        </div>
        <div className="text-slate-500 text-base font-medium">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:text-black hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

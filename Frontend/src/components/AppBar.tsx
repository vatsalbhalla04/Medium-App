import Avtar from "./Avatar";
import logo from "/src/assets/medium.svg"; 

export default function AppBar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Medium Logo" className="h-8 w-8" />
        <span className="text-lg font-semibold">Medium</span>
      </div>
      <div>
        <Avtar authname={"Vatsal"} />
      </div>
    </div>
  );
}

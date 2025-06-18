import React from "react";

interface LabelInputType {
  label: string;
  placeholder: string;
  type ?: string
}

const InputBox = React.forwardRef<HTMLInputElement, LabelInputType>(
  ({ label, placeholder,type }, ref) => {
    return (
      <div className="w-full space-y-1 select-none">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          type={type || "text"}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-800 placeholder-gray-400"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
);

export default InputBox;

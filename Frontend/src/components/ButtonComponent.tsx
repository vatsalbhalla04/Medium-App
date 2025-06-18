interface ButtonComp {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonComponent({ label, onClick }: ButtonComp) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full bg-black hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl shadow transition duration-200 cursor-pointer"  
    >
      {label}
    </button>
  );
}

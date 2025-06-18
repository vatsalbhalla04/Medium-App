interface authName{
    authname : string
}
export default function Avtar({authname}:authName) {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
        <span className="font-medium  dark:text-gray-50">{authname[0]}</span>
      </div>
    </div>
  );
}

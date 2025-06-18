export default function Quote() {
    return (
      <div className="h-screen flex justify-center bg-slate-100 flex-col items-center px-4 cursor-default select-none">
        <div className="flex justify-center">
          <div className="max-w-md text-2xl font-semibold text-center tracking-tight">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
        </div>
        <div className="max-w-md mt-6 text-center">
          <div className="font-medium mb-1">Jules Winnfield</div>
          <div className="text-gray-600 text-sm">CEO | Acme Inc</div>
        </div>
      </div>
    );
  }
  
export const BlogSkeleton = () => {
    return (
      <div className="w-full max-w-md bg-white rounded-xl p-5 shadow animate-pulse space-y-4">
        {/* Avatar + Name Row */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
          <div className="h-3 w-24 bg-gray-400 rounded" />
          <div className="h-1 w-1 bg-gray-400 rounded-full" />
          <div className="h-3 w-12 bg-gray-400 rounded" />
        </div>
  
        {/* Title */}
        <div className="h-5 bg-gray4200 rounded w-3/4" />
  
        {/* Content lines */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-400 rounded w-full" />
          <div className="h-3 bg-gray-400 rounded w-5/6" />
        </div>
  
        {/* Read time */}
        <div className="h-3 w-20 bg-gray-400 rounded mt-4" />
  
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  
import { Link } from "react-router-dom";
import Avtar from "./Avatar";

export interface BlogCardInp {
  authorName ?: string;
  id ?: number;
  title ?: string;
  content : string;
  publisedDate ?: string;
}

export default function BlogCard({
  id,
  authorName,
  title,
  content,
  publisedDate,
}: BlogCardInp) {

  const isShortContent = content.length <= 70;

  return (
    <Link to={`/blog/getBlog/${id}`}>
      <div className="flex justify-center pt-[5%]">
      <div className="bg-white border border-gray-300 shadow-md rounded-lg w-full max-w-2xl md:max-w-4xl p-4 sm:p-5 md:p-6 mx-4 sm:mx-auto space-y-3 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <Avtar authname={authorName} />
          <span className="font-medium">{authorName}</span>
          <span className="text-gray-400">•</span>
          <span>{publisedDate}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        {/* Content Preview */}
        <p className="text-gray-700 leading-relaxed">
          {isShortContent ? content : content.slice(0, 70) + "...."}
        </p>

        {/* Read Time */}
        <div className="text-xs text-gray-400">
          {`${Math.ceil(content.length / 100)} min read`}
        </div>

        {/* Divider */}
        <div className="bg-slate-200 h-[1px] w-full" />
      </div>
    </div>
    </Link>
  );
}

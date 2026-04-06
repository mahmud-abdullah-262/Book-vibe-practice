import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center max-w-md">
        
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>

        {/* Optional Illustration */}
        <div className="mt-10 text-gray-600 text-sm">
          Error Code: 404 | Something went wrong
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
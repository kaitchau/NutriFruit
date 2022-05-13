import React from "react";

const SearchAgainButton = () => {
  return (
    <div className="absolute inset-x-[750px] bottom-50 h-50 w-fit">
      <button className="whitespace-nowrap bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Search More
      </button>
    </div>
  );
};

export default SearchAgainButton;

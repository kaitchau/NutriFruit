import React from "react";

const SearchAgainButton = () => {
  return (
    <div class="absolute h-32 w-fit ...">
      <div class="absolute inset-x-[750px] bottom-0 h-50 ...">
        <button class="bg-sky-600 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300...">
          Search More
        </button>
      </div>
    </div>
  );
};

export default SearchAgainButton;

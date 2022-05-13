import React, { useRef, useState } from "react";

const SearchBar = () => {
  const inputEl = useRef(null);
  const [fruit, setFruit] = useState();
  // fruit is our state; setFruit is a mutator fn to change the fruit state
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    //sets our fruit state to the current value of inputEl,
    //aka the input from the search bar
    setFruit(inputEl.current.value);
  };

  //prints out current state
  console.log(fruit);

  return (
    <div className="container flex mx-auto">
      <div className="flex-none rounded w-full my-8 text-center ">
        <button
          className="flex-none items-center justify-center px-4 border-r"
          onClick={onButtonClick}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </button>
        <input
          ref={inputEl}
          type="text"
          className="px-4 py-2 w-1/2"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;

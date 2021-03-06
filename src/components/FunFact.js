import React from "react";

const FunFact = ({ facts }) => {
  //fact is the current element in the list facts
  let listFacts;
  try {
    listFacts = facts.map((fact) => (
      //the '.' after {fact} places a {.} after every fact of facts
      <li className="text-slate-500 dark:text-slate-400 my-4">{fact}.</li>
    ));
  } catch (error) {
    listFacts = (
      <li className="text-slate-500 dark:text-slate-400">{facts}.</li>
    );
  }

  return (
    <div className="relative h-64 w-100 ...">
      <div className="absolute top-[-280px] right-[250px] h-64 overflow-auto w-1/3 bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        {/* <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Fun Facts
        </h3>*/}
        <p className="font-serif text-slate-500 dark:text-white first-letter:font-bold first-letter:text-6xl first-letter:mr-3 first-letter:float-left mt-2 first-line:uppercase first-line:tracking-wideset first-line:text-base text-sm">
          Fun facts includes...........................................
        </p>
        <ul>{listFacts}</ul>
      </div>
    </div>
  );
};

export default FunFact;

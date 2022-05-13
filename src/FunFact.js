import React from "react";

const FunFact = () => {
  return (
    <div class="relative h-64 w-100 ...">
      <div class="absolute top-[-255px] right-[250px] h-64 w-[500px] bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Fun Facts
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The fun facts includes...
        </p>
      </div>
    </div>
  );
};

export default FunFact;

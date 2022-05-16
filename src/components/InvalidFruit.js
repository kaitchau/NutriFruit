import React from "react";
import ValidFruits from "./Hooks/ValidFruits";

const NutritionText = () => {
  const listItems = ValidFruits.map((fruit) => (
    <p className="text-slate-500 dark:text-white">{fruit}</p>
  ));

  return (
    <div className="relative h-64 w-100">
      <div className="absolute inset-y-0 left-[250px] w-2/3 bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl overflow-auto">
        <h3 className="text-slate-900 dark:text-white mb-3 text-2xl font-medium tracking-tight">
          Error: Please search for a valid fruit name.
        </h3>
        {listItems}
      </div>
    </div>
  );
};

export default NutritionText;

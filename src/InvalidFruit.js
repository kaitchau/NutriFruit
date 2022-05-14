import React from "react";

const NutritionText = () => {
  return (
    <div className="relative h-64 w-100 ...">
      <div className="absolute inset-y-0 left-[250px] w-[500px] bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Nutrition Facts
        </h3>
      </div>
    </div>
  );
};

export default NutritionText;

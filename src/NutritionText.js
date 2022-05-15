import React from "react";

const NutritionText = ({ name, nutritions }) => {
  let cals = nutritions.calories;
  let carbs = nutritions.carbohydrates;
  let fats = nutritions.fat;
  let proteins = nutritions.protein;
  let sugars = nutritions.sugar;

  return (
    <div className="relative h-64 w-100 ...">
      <div className="absolute inset-y-0 left-[250px] w-1/3 bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white text-2xl font-medium tracking-tight">
          Nutrition Facts
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Name: {name}
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Carb: {carbs}g
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Fat: {fats}g
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Protein: {proteins}g
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Sugar: {sugars}g
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Calories: {cals}kcal
        </p>
      </div>
    </div>
  );
};

export default NutritionText;

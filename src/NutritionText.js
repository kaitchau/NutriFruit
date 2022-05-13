import React from "react";

const NutritionText = (prop) => {
  //data is a property of prop
  // const name = prop.name;
  // const cals = prop.nutritions.calories;
  // const carbs = prop.nutritions.carbohydrates;
  // const fats = prop.nutritions.fat;
  // const proteins = prop.nutritions.protein;
  // const sugars = prop.nutritions.sugar;

  return (
    <div className="relative h-64 w-100 ...">
      <div className="absolute inset-y-0 left-[250px] w-[500px] bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Nutrition Facts
        </h3>
        {/* <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Name: {name}
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Carb: {carbs}
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Fat: {fats}
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Protein: {proteins}
        </p>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Sugar: {sugars}
        </p> */}
      </div>
    </div>
  );
};

export default NutritionText;

"use client";


import DateSelector from "./DateSelector";
import SelectSystem from "./SelectSystem";
const TopBar = () => {
  return (
    <div className=" flex md:mt-10 justify-between space-x-4  ">
      <div className="">
        <SelectSystem />
      </div>
      <div>
        <DateSelector />
      </div>
    </div>
  );
};

export default TopBar;

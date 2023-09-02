"use client";

import { useState } from "react";
import RegionsTeams from "./components/RegionsTeams";
import { MainNav } from "./components/main-nav";
import { UserNav } from "./components/user-nav";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const NavBarAll = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    console.log(latestScrollY);
    // pravious
    const pravious = scrollY.getPrevious();

    console.log("previous", pravious);
    console.log("latest", latestScrollY);

    if (latestScrollY > pravious && latestScrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -100 ,display:"none"},
        visible: { opacity: 1, y:0 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="flex-col z-50 overflow-hidden fixed w-full md:flex shadow-md border-none border-gray-200 "
    >
      <div className="overflow-x-scroll border-b ">
        <div className="flex items-center h-16 px-4">
          <RegionsTeams />
          <MainNav className="mx-6" />
          <div className="flex items-center ml-auto space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBarAll;

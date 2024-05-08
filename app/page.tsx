import Home from "@/components/Home";
import Prompt from "@/components/Prompt";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Prompt />

      <div className="mb-20 h-full">
        <Home />
      </div>
    </>
  );
};

export default HomePage;

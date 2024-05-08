"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import prompts from "@/db/data.json"
const Home = () => {

  const [randomPrompts, setRandomPrompts] = useState([]);

  useEffect(() => {
    const getRandomIndices = () => {
      const indices: any = [];
      while (indices.length < 4) {
        const randomIndex = Math.floor(Math.random() * prompts.length);
        if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
        }
      }
      return indices;
    };

    const randomIndices = getRandomIndices();

    const randomPrompts = randomIndices.map((index: number) => prompts[index]);

    setRandomPrompts(randomPrompts);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center sm:h-full sm:mt-8">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-medium text-[28px] text-center">
          How Can I Help You Today?
        </h2>
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:mt-32 mt-4">
        {
            randomPrompts?.map((prompt: any, index) => (
                <div key={index} className="rounded-lg cursor-pointer shadow bg-white text-black dark:bg-zinc-700 dark:text-white p-4">
                    <h3 className="font-bold mb-2">{prompt?.question}</h3>
                    <p className="opacity-50">Get immediate AI generated response</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Home;

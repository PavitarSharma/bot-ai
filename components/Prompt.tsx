"use client";

import { generateChat, updateChat } from "@/actions";
import { Message } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface PropmtProps {
  id?: string;
  chat?: Message;
}

const Prompt = ({ id, chat }: PropmtProps) => {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("48px");
  const [parentHeight, setParentHeight] = useState("80px");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePromptKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      if (!prompt.trim()) {
        event.preventDefault(); // Prevent default behavior of Enter key
        return; // Exit the function if prompt is empty
      }
    }

    const scrollHeight = textareaRef.current?.scrollHeight;
    if (scrollHeight) {
      setTextareaHeight(`${scrollHeight}px`);
      // setParentHeight(`${scrollHeight + 32}px`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target;

    if (input.value === "") {
      setTextareaHeight("48px");
      // setParentHeight("80px");
      return;
    }
    setPrompt(input.value);
  };

  const handleAsk = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!prompt) {
      return;
    }


    if (!chat || !id) {
      // If either chat or id is not provided, generate a new chat
      const newId = uuidv4();
      await generateChat(prompt, newId);
      router.push(`/conversations/${newId}`);
    } else {

      // If both chat and id are provided, update the existing chat
      await updateChat(id , prompt);
    }

    setPrompt("");
    setTextareaHeight("48px");
    // setParentHeight("80px");
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!prompt) {
      return;
    }

    console.log("Save");

    setPrompt("");
    setTextareaHeight("48px");
    setParentHeight("80px");
  };

  return (
    <div className="fixed py-4 px-4  bottom-0  right-0 md:left-[288px] left-0 z-40 shadow flex items-center dark:bg-[#1E1E1F] dark:text-white gradient-background text-black max-h-40 overflow-y-hidden">
      <div className="relative w-full">
        <div className="flex  gap-4 items-end">
          <textarea
            ref={textareaRef}
            name="prompt"
            id="prompt"
            defaultValue={prompt}
            onKeyDown={handlePromptKeyDown}
            onChange={handleChange}
            style={{ height: textareaHeight }}
            className="flex-1 rounded-lg outline-0 border border-gray-600 dark:border-gray-400 dark:bg-transparent px-4 py-2 resize-none overflow-y-auto scrollbar"
          ></textarea>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAsk}
              className="bg-primary text-black text-sm px-4 py-2 h-12 rounded-lg font-medium"
            >
              Ask
            </button>
            <button
              onClick={handleSave}
              className="bg-primary text-black text-sm px-4 py-2 h-12 rounded-lg font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;

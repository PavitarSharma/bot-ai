"use client";

import React, { useState } from "react";
import Modals from "./Modals";
import useFeedbackStore from "@/store/feedback-store";
import Image from "next/image";
import { useSnackbar } from "notistack";

const FeedbackModal = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { isOpen, onClose } = useFeedbackStore();
  const [feedback, setFeedback] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (feedback.length === 0) {
      enqueueSnackbar("Please write your feedback", { variant: "error" });
      return;
    }
    setFeedback("");
    onClose();
  };

  const content = (
    <>
      <div className="flex items-center gap-2">
        <Image src="/bulb.svg" alt="bulb" width={40} height={40} />
        <p className="text-lg">Provide Additional Feedback</p>
      </div>

      <form className="mt-4" onSubmit={onSubmit}>
        <textarea
          value={feedback}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFeedback(event.target.value)
          }
          name="feedback"
          id="feedback"
          rows={5}
          className="w-full rounded-lg border border-gray-400 dark:border-zinc-400 bg-transparent resize-none outline-none px-4 py-2"
        ></textarea>

        <div className="flex justify-end mt-2">
          <button className="bg-secondary text-black font-medium rounded px-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
  return <Modals isOpen={isOpen} onClose={onClose} content={content} />;
};

export default FeedbackModal;

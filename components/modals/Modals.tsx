"use client";

import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Modals: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center h-screen dark:bg-black/40 bg-white/70 p-4">
        <div className="max-w-xl w-full bg-white text-black dark:bg-zinc-700 dark:text-white rounded-md p-4 mx-auto relative shadow">
          <button className="absolute right-2 top-2">
            <X />
          </button>

          {content}
        </div>
      </div>
    )
  );
};

export default Modals;

"use client";

import { MessageCircle, SquarePen, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import useSidebarStore from "@/store/sidebar-store";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const { onClose, isOpen } = useSidebarStore();
  return (
    <aside
      className={`w-72 h-screen fixed left-0 top-0 dark:bg-black dark:text-white bg-white text-black shadow z-[500] ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "md:translate-x-0 md:opacity-100 -translate-x-[400px] opacity-0"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute -right-10 top-4 w-10 h-10 border border-gray-300 dark:border-zinc-400 md:hidden flex items-center justify-center rounded-lg"
      >
        <X size={20} />
      </button>
      <div className="h-16 sticky z-10 top-0 left-0 flex items-center px-4 border-b dark:border-zinc-600  bg-primary dark:bg-black dark:text-white w-full">
        <div
          onClick={() => router.push("/")}
          className="flex items-center justify-between w-full cursor-pointer p-2 rounded  hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.svg"
              alt="logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-sm font-semibold">New Chat</span>
          </div>
          <SquarePen size={22} />
        </div>
      </div>

      <div className="overflow-y-auto p-4 h-[calc(100%_-_64px-48px)] scrollbar">
        <Link href="/conversations" className="bg-primary text-black text-sm h-10 rounded-md w-full text-center font-medium flex items-center justify-center">
        Past Conversations
        </Link>
      </div>

      <div className="h-12 shadow absolute bottom-0 w-full z-10 flex items-center justify-between px-4">
        <Link href="/conversations">
          <MessageCircle />
        </Link>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};

export default Sidebar;

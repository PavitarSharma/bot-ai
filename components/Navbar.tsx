"use client";

import useSidebarStore from "@/store/sidebar-store";
import { Menu, SquarePen, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter()
  const { onOpen } = useSidebarStore();
  return (
    <div className="fixed top-0 right-0 h-16 shadow md:left-[288px] left-0 z-50 flex items-center justify-between px-4 dark:bg-[#1E1E1F] dark:text-white gradient-background text-black">
      <button onClick={onOpen} className="md:hidden block">
        <Menu />
      </button>
      <h1 className="text-secondary font-bold sm:text-[28px] text-2xl">
        Bot AI
      </h1>
      <div className="flex items-center gap-4">
        <button onClick={() => router.push("/")}>
          <SquarePen />
        </button>
        <button>
          <Upload />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

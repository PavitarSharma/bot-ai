import { create } from "zustand";
import { Store } from "@/types";

const useSidebarStore = create<Store>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useSidebarStore
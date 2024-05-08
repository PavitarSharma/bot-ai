import { create } from "zustand";
import { Store } from "@/types";

const useFeedbackStore = create<Store>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useFeedbackStore
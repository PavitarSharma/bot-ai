export interface Store {
    isOpen: boolean,
    onOpen: () => void;
    onClose: () => void;
}

export type ChatMessage = {
    content: string;
    role: string;
}
export interface Message {
    id: string;
    messages: ChatMessage[];
}
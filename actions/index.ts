"use server";
import openai from '@/lib/openAI';
import { Message } from '@/types';



let chats: Message[] = [];



export const generateChat = async (message: string, id: string) => {

    try {
        const newChat = {
            id: id,
            messages: [{
                content: message,
                role: 'user'
            }]
        };
   


        chats.push(newChat);

        // Return the updated chats array
        return newChat;
    } catch (error) {
        console.error("Error generating chat:", error);
        throw error;
    }

    // const chatCompletion = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: message }],
    //     model: 'gpt-3.5-turbo',
    // });
    // const responseText = chatCompletion.choices[0]

    // console.log(responseText);

    return chats

}

export const getAllChats = async () => {
    return chats
}

export const getChat = async (id: string) => {
    return chats.filter(chat => chat.id === id)[0]
}

export const updateChat = async (id: string, message: string) => {
    chats = chats.map(chat => {
        if (chat.id === id) {
            chat.messages.push({
                content: message,
                role: 'user'
            })
        }
        return chat
    })
}

export const deleteChat = async (id: string) => {
    chats = chats.filter(chat => chat.id !== id)
    return chats
}

export const clearChats = async () => {
    chats = []
    return chats
}


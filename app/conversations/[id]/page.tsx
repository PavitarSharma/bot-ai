import { getAllChats, getChat } from "@/actions";
import Prompt from "@/components/Prompt";
import React from "react";

const ConversationPage = async ({ params: { id } }: { params: { id: string } }) => {
  const chat = await getChat(id)
  const chats = await getAllChats()

  return (
    <>
      <Prompt id={id} chat={chat} />
    </>
  );
};

export default ConversationPage;

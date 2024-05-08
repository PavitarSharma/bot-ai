import { getAllChats } from '@/actions'
import React from 'react'

const ConversationsPage = async () => {
  const chats = await getAllChats()

  
  return (
    <div>Conversations Page</div>
  )
}

export default ConversationsPage
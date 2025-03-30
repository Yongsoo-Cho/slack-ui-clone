import { useState, useEffect, useRef } from 'react';
import ChatInput from "./ui/ChatInput";
import MessageHistory from './ui/MessageHistory';
import ChannelDescription from './ui/ChannelDescription';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Toast from './ui/Toast';

type ChatMessage = {
    text: string;
    timestamp: string;
};
type ChannelContentProps = {
    channelName: string;
    chatHistory: ChatMessage[];
    onSend: (message: string) => void;
};
  
export default function ChannelContent({channelName, chatHistory, onSend}: ChannelContentProps) {
    const [showNewMessageIndicator, setShowNewMessageIndicator] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const handleSendMessage = (message: string) => {
        const nearBottom = isNearBottom();
        onSend(message);
        if (!nearBottom) {
            setShowNewMessageIndicator(true);
        }
      };
    const isNearBottom = () => {
        const el = scrollRef.current;
        if (!el) return true;
        return el.scrollHeight - el.scrollTop - el.clientHeight < 100;
    };
    useEffect(() => {
        const el = scrollRef.current;
        if (el && isNearBottom()) {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
        }
    }, [chatHistory]);
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
    
        const handleScroll = () => {
          if (isNearBottom()) {
            setShowNewMessageIndicator(false);
          }
        };
    
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, [chatHistory]);
    const scrollToBottom = () => {
        const el = scrollRef.current;
        if (el) {
          el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
        }
    };
    
    return (
        <div className="w-full h-full flex flex-col px-4 py-2">
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2"
            >
                <ChannelDescription title={channelName}/>
                <MessageHistory messages={chatHistory} />
            </div>

            <div className="relative w-full">
                <Toast
                    show={showNewMessageIndicator}
                    text="New Messages!"
                    onClick={scrollToBottom}
                />
                <ChatInput onSend={handleSendMessage} />
            </div>
        </div>
    );
};
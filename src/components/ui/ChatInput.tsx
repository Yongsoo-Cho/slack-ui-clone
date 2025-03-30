import { useState, useCallback } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

type ChatInputProps = {
    onSend: (message: string) => void;
  };

export default function ChatInput({ onSend }: ChatInputProps) {
    const [message, setMessage] = useState("");

    const handleSend = useCallback(() => {
        if (message.trim()) {
          onSend(message);
          console.log(message);
          setMessage("");
        }
      }, [message, onSend]);
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      };

    return (
      <div className="p-4 border-gray-300 bg-[var(--background)] w-full">
        <div className="flex flex-rows gap-1 border-l border-r border-t border-gray-300 bg-gray-200 rounded-t-md min-h-[35px] px-2 py-2">
            <button
                className="relative group w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-300 hover:text-black transition"
                aria-label="Generate message"
            >
                <i className="fas fa-wand-magic-sparkles text-sm" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    Generate<br />Example
                </span>
            </button>
        </div>
        <textarea
          placeholder="Message #channel"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full resize-none border-x border-gray-300 bg-white p-3 text-sm text-black placeholder-gray-400 focus:outline-none leading-tight align-top"
          rows={3}
        />
        <div className="p-2 border-l border-r border-b border-gray-300 bg-white rounded-b-md flex justify-end">
            <button 
                className="px-5 py-1 text-sm font-medium bg-green-600 text-white rounded-md transition duration-150 ease-in-out
                        hover:bg-green-500
                        disabled:bg-gray-400 disabled:text-gray-200"
                disabled={!message.trim()}
                onClick={()=>setMessage("")}
            >
                <i className="fas fa-paper-plane"></i>
            </button>
        </div>
      </div>
    );
  }
type ChatMessage = {
  text: string;
  timestamp: string;
};

type MessageHistoryProps = {
  messages: ChatMessage[];
};

export default function MessageHistory({ messages }: MessageHistoryProps) {
  return (
    <>
      {messages.map((msg, index) => (
        <div
          key={index}
          className="group w-full flex items-start gap-3 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors duration-150"
        >
          {/* Avatar */}
          <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-300 text-white text-sm shrink-0">
            <i className="fas fa-user" />
          </div>

          {/* Message Content (fills the row) */}
          <div className="flex flex-col flex 1">
            {/* Header */}
            <div className="flex items-baseline flex-wrap gap-2">
              <span className="font-semibold text-sm text-gray-900">Mike Cho</span>
              <span className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                {msg.timestamp}
              </span>
            </div>

            {/* Message Bubble (full width) */}
            <div
              className="
                mt-1 text-sm text-gray-800 
                w-full break-words whitespace-pre-wrap
              "
            >
              {msg.text}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
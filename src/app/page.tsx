'use client';

import { useState, useCallback } from 'react';
import ChannelButton from '@/components/ui/channelButton';
import ChannelContent from '@/components/ChannelContent';
import Sidebar from '@/components/ui/Sidebar';

const CHANNELS = [
  'introduction',
  'work-experience',
  'fullstack-projects',
  'design-portfolio',
  'science?'
];

type ChatMessage = {
  text: string;
  timestamp: string;
};

export default function Home() {
  const [selected, setSelected] = useState(CHANNELS[0]);
  const [channelHistories, setChannelHistories] = useState<Record<string, ChatMessage[]>>({});

  const handleChannelClick = useCallback((channel: string) => {
    setSelected(channel);
  }, []);
  const handleSendMessage = (message: string) => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    setChannelHistories(prev => ({
      ...prev,
      [selected]: [...(prev[selected] || []), { text: message, timestamp }]
    }));
  };


  return (
    <main className="grid sm:grid-cols-[1fr_5fr_12fr] grid-cols-[1fr_2fr] w-full h-[96vh] bg-[var(--darkpurple)]">
      <aside className="hidden sm:block bg-[var(--darkpurple)]">
        <Sidebar />
      </aside>
      <nav className="bg-[var(--lightpurple)] p-2 space-y-2">
        <div className="p-2 text-[var(--selectedpurple)] font-extrabold hover:bg-[var(--hoverpurple)] rounded-md">
          Yongsoo Cho: Fullstack Dev
        </div>
        {CHANNELS.map((channel) => (
          <ChannelButton
            key={channel}
            text={channel}
            isSelected={selected === channel}
            onClick={() => handleChannelClick(channel)}
          />
        ))}
      </nav>

      <section className="bg-[var(--background)] overflow-hidden">
        <ChannelContent
          channelName={selected}
          chatHistory={channelHistories[selected] || []}
          onSend={handleSendMessage}
        />
      </section>
    </main>
  );
}
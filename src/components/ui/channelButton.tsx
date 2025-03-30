interface ChannelButtonProps {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

export default function ChannelButton({text, isSelected, onClick}: ChannelButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`truncate w-full text-left p-1.5 rounded-sm font-medium ${
            isSelected
                ? "text-[var(--lightpurple)] bg-[var(--selectedpurple)]"
                : "text-[var(--selectedpurple)] hover:bg-[var(--hoverpurple)]"
            }`}
        >
            # {text}
        </button>
    );
};
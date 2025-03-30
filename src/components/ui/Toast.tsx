type ToastProps = {
    show: boolean;
    text: string;
    onClick?: () => void;
};

export default function Toast({ show, text, onClick }: ToastProps) {
    return (
        <div
        className={`
            absolute -top-6 left-1/2 -translate-x-1/2 z-10
            bg-blue-600 text-white px-3 py-1 text-xs rounded-full font-bold shadow-md
            transition-all duration-300 ease-in-out transform cursor-pointer
            hover:bg-blue-700
            ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}
        `}
        onClick={onClick}
        >
        {text}
        </div>
    );
}
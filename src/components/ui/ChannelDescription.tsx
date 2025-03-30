type ChannelDescInfo = {
    title: string;
  };
  
export default function ChannelDescription({ title }: ChannelDescInfo) {
    return (
        <div className="p-4 mb-4">
            <div className="text-lg font-semibold text-gray-800 mb-1">
                #{title}
            </div>

            <p className="text-base text-gray-500 leading-relaxed">
                <span className="font-medium text-gray-600">Mike Cho</span> created this channel on{" "}
                <span className="font-medium text-gray-600">March 26, 2025</span>. This is the very beginning of the{" "}
                <span className="font-medium text-gray-600">#{title}</span> channel.
                
                <br/>
            </p>
        </div>
    );
}
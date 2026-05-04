export default function Splash({ loading }) {
    return (
        <div
            className={`
                fixed inset-0 bg-black flex items-center justify-center z-50
                transition-opacity duration-500
                ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
        >
            <video
                src="/video.mp4"
                autoPlay
                muted
                playsInline
                className="w-40 h-40 object-contain opacity-90"
            />
        </div>
    );
}
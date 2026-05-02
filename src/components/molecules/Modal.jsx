export default function Modal({ isOpen, onClose, title, children }) {
    return (
        <div
            className={`modal-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isOpen ? 'open' : ''}`}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <div className="modal-box bg-bg2 border border-border2 rounded-xl p-6 w-full max-w-md">
                <h3 className="font-sans text-[17px] font-bold text-text mb-5 leading-snug">
                    {title}
                </h3>
                {children}
            </div>
        </div>
    )
}
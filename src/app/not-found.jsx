import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#f5f2ee] flex items-center justify-center px-6 font-sans">
            <div className="max-w-md w-full border-t-2 border-[#1a1714] pt-10 animate-[rise_0.6s_ease_both]">

                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#c8502a] mb-5 block">
                    404
                </span>

                <h1 className="font-serif text-5xl sm:text-6xl font-normal text-[#1a1714] leading-tight mb-4">
                    Page not found
                </h1>

                <p className="text-base text-[#7a746d] leading-relaxed border-b border-[#ddd8d1] pb-10 mb-10">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1714] tracking-wide group"
                >
                    Back to home
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500&display=swap');
        .font-serif { font-family: 'Instrument Serif', serif; }
        .font-sans  { font-family: 'DM Sans', sans-serif; }
        @keyframes rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </main>
    );
}
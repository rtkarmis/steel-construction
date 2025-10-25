import dynamic from "next/dynamic";

// ✅ Framer Motion lazy load kullanılmaya devam eder ama header'lar preload edilir
const DesktopHeader = dynamic(() => import("./DesktopHeader"), {
  ssr: true,
  loading: () => <div className="h-16" />,
});
const MobileHeader = dynamic(() => import("./MobileHeader"), {
  ssr: true,
  loading: () => <div className="h-16" />,
});

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <nav
        id="navbar"
        className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/90 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <DesktopHeader />
        </div>
      </nav>

      {/* Mobile Header - Fixed Position */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50">
        <MobileHeader />
      </nav>
    </>
  );
}

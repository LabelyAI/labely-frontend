"use client";

import { usePathname } from "next/navigation";

const LightningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const breadcrumbMap: Record<string, string> = {
  "/upload": "Upload Dataset",
  "/gallery": "Gallery",
  "/review": "Annotation Review",
  "/annotated": "Annotated Dataset",
};

export default function Header() {
  const pathname = usePathname();
  const breadcrumb = breadcrumbMap[pathname] || "Dashboard";

  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[13px] ml-14 lg:ml-0">
        <span className="text-gray-500 hidden sm:inline">Workspace</span>
        <svg className="hidden sm:block" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="text-gray-800 font-medium">{breadcrumb}</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 bg-orange-50 px-2 sm:px-3 py-1.5 rounded-full">
          <LightningIcon />
          <span className="text-[12px] sm:text-[13px] font-medium text-gray-700">2,400</span>
          <span className="hidden sm:inline text-[13px] font-medium text-gray-700">Credits</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <BellIcon />
        </button>
      </div>
    </header>
  );
}

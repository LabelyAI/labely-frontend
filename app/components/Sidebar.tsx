"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Icons
const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const GalleryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const ReviewIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const AnnotatedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navItems = [
  { name: "Upload", icon: UploadIcon, href: "/upload" },
  { name: "Gallery", icon: GalleryIcon, href: "/gallery" },
  { name: "Review", icon: ReviewIcon, href: "/review" },
  { name: "Annotated", icon: AnnotatedIcon, href: "/annotated" },
];

const SidebarContent = ({ pathname, onClose, onOpenUserModal }: { pathname: string; onClose: () => void; onOpenUserModal: () => void }) => (
  <>
    {/* Logo */}
    <div className="flex items-center justify-between px-5 py-5">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <span className="font-semibold text-[15px] text-gray-900">LabelyAI</span>
      </Link>
      <button 
        className="lg:hidden p-1 hover:bg-gray-100 rounded"
        onClick={onClose}
      >
        <CloseIcon />
      </button>
    </div>

    {/* Navigation */}
    <nav className="flex-1 px-3 mt-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-[14px] font-medium transition-colors ${
              isActive
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon />
            {item.name}
          </Link>
        );
      })}
    </nav>

    {/* Storage Usage */}
    <div className="px-4 py-4 border-t border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] text-gray-500">Storage Usage</span>
        <span className="text-[12px] font-medium text-gray-700">72%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[72%] h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
      </div>
      <p className="text-[11px] text-gray-400 mt-1.5">7.2 GB of 10 GB used</p>
    </div>

    {/* User Profile */}
    <div className="px-4 py-4 border-t border-gray-100">
      <button 
        onClick={onOpenUserModal}
        className="w-full flex items-center justify-between hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center overflow-hidden">
            <span className="text-[13px] font-medium text-orange-800">PP</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[13px] font-medium text-gray-800">Priya Patel</span>
            <span className="text-[11px] text-gray-400">priya@labely.ai</span>
          </div>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            // Handle logout
          }}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <LogoutIcon />
        </button>
      </button>
    </div>
  </>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-3 left-4 z-50 p-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed inset-y-0 left-0 w-[250px] bg-white border-r border-gray-100 flex flex-col z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarContent 
          pathname={pathname} 
          onClose={() => setIsOpen(false)} 
          onOpenUserModal={() => setIsUserModalOpen(true)} 
        />
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-[200px] bg-white border-r border-gray-100 flex-col fixed h-full">
        <SidebarContent 
          pathname={pathname} 
          onClose={() => {}} 
          onOpenUserModal={() => setIsUserModalOpen(true)} 
        />
      </aside>

      {/* User Modal */}
      {isUserModalOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setIsUserModalOpen(false)}
          />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 px-6 py-5 text-white relative">
              <button 
                onClick={() => setIsUserModalOpen(false)}
                className="absolute top-3 right-3 p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <CloseIcon />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                  <span className="text-[20px] font-bold text-white">PP</span>
                </div>
                <div>
                  <h2 className="text-[18px] font-bold">Priya Patel</h2>
                  <p className="text-orange-100 text-[13px]">@priya_patel</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Subscription Type */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-100">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-medium text-purple-600 uppercase tracking-wide">Subscription</span>
                  <span className="px-2 py-0.5 bg-purple-600 text-white text-[10px] font-bold rounded-full">PRO</span>
                </div>
                <p className="text-[16px] font-bold text-gray-800">Professional Plan</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Renews on March 15, 2026</p>
              </div>

              {/* Credits */}
              <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-medium text-orange-600 uppercase tracking-wide">Credits Available</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <p className="text-[24px] font-bold text-gray-800">2,400</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-orange-100 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
                  </div>
                  <span className="text-[10px] text-gray-500">60%</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">of 4,000 monthly credits</p>
              </div>

              {/* User Info */}
              <div className="space-y-2.5">
                <div>
                  <label className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Email Address</label>
                  <p className="text-[13px] text-gray-800 mt-0.5">priya@labely.ai</p>
                </div>
                <div>
                  <label className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Username</label>
                  <p className="text-[13px] text-gray-800 mt-0.5">@priya_patel</p>
                </div>
                <div>
                  <label className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Member Since</label>
                  <p className="text-[13px] text-gray-800 mt-0.5">January 12, 2026</p>
                </div>
                <div>
                  <label className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Total Annotations</label>
                  <p className="text-[13px] text-gray-800 mt-0.5">12,458 images annotated</p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 space-y-2">
                <button className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-[13px] font-medium transition-colors">
                  Manage Subscription
                </button>
                <button className="w-full py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-lg text-[13px] font-medium transition-colors">
                  Account Settings
                </button>
                <button className="w-full py-2 text-red-600 hover:bg-red-50 rounded-lg text-[13px] font-medium transition-colors flex items-center justify-center gap-2">
                  <LogoutIcon />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

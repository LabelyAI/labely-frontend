"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type ImageStatus = "unreviewed" | "approved" | "rejected";

interface ReviewImage {
  id: number;
  name: string;
  status: ImageStatus;
}

const reviewImages: ReviewImage[] = [
  { id: 1, name: "IMG_4021.png", status: "unreviewed" },
  { id: 2, name: "IMG_4321.png", status: "unreviewed" },
  { id: 3, name: "IMG_3321.png", status: "approved" },
  { id: 4, name: "IMG_4521.png", status: "rejected" },
  { id: 5, name: "IMG_6371.png", status: "approved" },
  { id: 6, name: "IMG_2321.png", status: "rejected" },
  { id: 7, name: "IMG_6721.png", status: "unreviewed" },
  { id: 8, name: "IMG_6431.png", status: "approved" },
];

const ImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

// Annotation Tool Icons
const RectangleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
  </svg>
);

const PolygonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
  </svg>
);

const BrushIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
  </svg>
);

const EraserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
    <path d="M22 21H7" />
    <path d="m5 11 9 9" />
  </svg>
);

const MagicWandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 4-3 3" />
    <path d="m18 7-3 3" />
    <path d="m11 11-8 8a1 1 0 1 0 1.42 1.42l8-8" />
    <path d="m9 5 1-1" />
    <path d="m5 9-1 1" />
  </svg>
);

const ZoomInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const ExpandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const MoveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 9l-3 3 3 3" />
    <path d="M9 5l3-3 3 3" />
    <path d="M15 19l-3 3-3-3" />
    <path d="M19 9l3 3-3 3" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const UndoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7v6h6" />
    <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
  </svg>
);

const RedoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 7v6h-6" />
    <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
  </svg>
);

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const TransferIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17l-4-4 4-4" />
    <path d="M17 7l4 4-4 4" />
    <line x1="3" y1="13" x2="21" y2="13" />
    <line x1="3" y1="11" x2="21" y2="11" />
  </svg>
);

const StatusBadge = ({ status }: { status: ImageStatus }) => {
  const styles = {
    unreviewed: "bg-gray-100 text-gray-500",
    approved: "bg-green-100 text-green-600",
    rejected: "bg-red-100 text-red-500",
  };

  const labels = {
    unreviewed: "Unreviewed",
    approved: "Approved",
    rejected: "Rejected",
  };

  return (
    <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

export default function ReviewPage() {
  const [images, setImages] = useState(reviewImages);
  const [selectedId, setSelectedId] = useState(3);
  const [activeTab, setActiveTab] = useState<"all" | ImageStatus>("all");
  const [activeTool, setActiveTool] = useState("rectangle");
  const [showImageList, setShowImageList] = useState(true);

  const counts = {
    unreviewed: images.filter((img) => img.status === "unreviewed").length,
    approved: images.filter((img) => img.status === "approved").length,
    rejected: images.filter((img) => img.status === "rejected").length,
  };

  const filteredImages = activeTab === "all" 
    ? images 
    : images.filter((img) => img.status === activeTab);

  const selectedImage = images.find((img) => img.id === selectedId);

  const handleApprove = () => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === selectedId ? { ...img, status: "approved" as ImageStatus } : img
      )
    );
  };

  const handleReject = () => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === selectedId ? { ...img, status: "rejected" as ImageStatus } : img
      )
    );
  };

  const annotationTools = [
    { id: "rectangle", icon: RectangleIcon, label: "Bounding Box" },
    { id: "polygon", icon: PolygonIcon, label: "Polygon" },
    { id: "brush", icon: BrushIcon, label: "Brush" },
    { id: "eraser", icon: EraserIcon, label: "Eraser" },
    { id: "magic", icon: MagicWandIcon, label: "Magic Select" },
  ];

  return (
    <div className="flex min-h-screen bg-[#FAFAFA] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-[200px] flex flex-col">
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col">
          {/* Page Title */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[20px] sm:text-[22px] font-semibold text-gray-900">Annotation Review</h1>
            <button
              onClick={() => setShowImageList(!showImageList)}
              className="lg:hidden p-2 bg-white border border-gray-200 rounded-lg text-[13px] font-medium text-gray-700"
            >
              {showImageList ? "Hide List" : "Show List"}
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Left Panel - Image List */}
            <div className={`${showImageList ? 'block' : 'hidden'} lg:block w-full lg:w-[300px] xl:w-[340px] flex flex-col`}>
              {/* Tabs */}
              <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-2 lg:pb-0">
                <button
                  onClick={() => setActiveTab("unreviewed")}
                  className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === "unreviewed"
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Unreviewed
                  <span className="ml-1 text-gray-400">({counts.unreviewed})</span>
                </button>
                <button
                  onClick={() => setActiveTab("approved")}
                  className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === "approved"
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Approved
                  <span className="ml-1 text-gray-400">({counts.approved})</span>
                </button>
                <button
                  onClick={() => setActiveTab("rejected")}
                  className={`px-3 py-2 text-[13px] font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === "rejected"
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Rejected
                  <span className="ml-1 text-gray-400">({counts.rejected})</span>
                </button>
              </div>

              {/* Image List */}
              <div className="flex-1 overflow-y-auto space-y-2 max-h-[200px] lg:max-h-none">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => {
                      setSelectedId(image.id);
                      if (window.innerWidth < 1024) setShowImageList(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      selectedId === image.id
                        ? "bg-white border-2 border-orange-200 shadow-sm"
                        : "bg-white border border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ImageIcon />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-[13px] sm:text-[14px] font-medium text-gray-800 truncate">
                        {image.name}
                      </span>
                      <StatusBadge status={image.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Image Preview */}
            <div className="flex-1 flex flex-col min-h-0">
              {/* Annotation Toolbar */}
              <div className="bg-white rounded-xl border border-gray-100 p-2 sm:p-3 mb-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {/* Annotation Tools */}
                  <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg">
                    {annotationTools.map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => setActiveTool(tool.id)}
                        className={`p-2 rounded-md transition-colors ${
                          activeTool === tool.id
                            ? "bg-orange-500 text-white"
                            : "text-gray-500 hover:bg-gray-100"
                        }`}
                        title={tool.label}
                      >
                        <tool.icon />
                      </button>
                    ))}
                  </div>

                  <div className="w-px h-8 bg-gray-200 hidden sm:block" />

                  {/* View Controls */}
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500" title="Zoom In">
                      <ZoomInIcon />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500" title="Zoom Out">
                      <ZoomOutIcon />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500" title="Fullscreen">
                      <ExpandIcon />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500" title="Pan">
                      <MoveIcon />
                    </button>
                  </div>

                  <div className="w-px h-8 bg-gray-200 hidden sm:block" />

                  {/* History Controls */}
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500" title="Undo">
                      <UndoIcon />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500" title="Redo">
                      <RedoIcon />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Delete Annotation">
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Preview Area */}
              <div className="flex-1 bg-[#1a1a1a] rounded-xl overflow-hidden relative flex items-center justify-center min-h-[250px] sm:min-h-[350px]">
                {/* Checkered background pattern */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, #2a2a2a 25%, transparent 25%),
                      linear-gradient(-45deg, #2a2a2a 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, #2a2a2a 75%),
                      linear-gradient(-45deg, transparent 75%, #2a2a2a 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                  }}
                />

                {/* Sample annotated image */}
                <div className="relative z-10 max-w-full max-h-full p-4">
                  <img
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&h=400&fit=crop"
                    alt="Annotated preview"
                    className="max-w-full max-h-[200px] sm:max-h-[300px] lg:max-h-[400px] object-contain rounded-lg"
                    style={{
                      filter: 'contrast(1.1)',
                    }}
                  />
                  {/* Overlay for annotation effect */}
                  <div 
                    className="absolute inset-4 rounded-lg pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
                      mixBlendMode: 'overlay',
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4">
                <button
                  onClick={handleApprove}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 border-2 border-green-500 text-green-500 rounded-lg text-[14px] font-medium hover:bg-green-50 transition-colors"
                >
                  <CheckIcon />
                  <span className="hidden sm:inline">Approve</span>
                </button>
                <button
                  onClick={handleReject}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-red-500 text-white rounded-lg text-[14px] font-medium hover:bg-red-600 transition-colors"
                >
                  <XIcon />
                  <span className="hidden sm:inline">Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-center">
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-xl text-[14px] font-medium transition-colors">
              <TransferIcon />
              <span className="hidden sm:inline">Transfer all Approved</span>
              <span className="sm:hidden">Transfer Approved</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// Sample images data
const galleryImages = [
  { id: 1, name: "IMG_2041.jpg", src: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=400&h=300&fit=crop", selected: true },
  { id: 2, name: "IMG_2042.jpg", src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=300&fit=crop", selected: true },
  { id: 3, name: "IMG_2043.jpg", src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&h=300&fit=crop", selected: true },
  { id: 4, name: "IMG_2044.jpg", src: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=300&fit=crop", selected: false },
  { id: 5, name: "IMG_2045.jpg", src: "https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?w=400&h=300&fit=crop", selected: false },
  { id: 6, name: "IMG_2046.jpg", src: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=400&h=300&fit=crop", selected: false },
  { id: 7, name: "IMG_2047.jpg", src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop", selected: false },
  { id: 8, name: "IMG_2048.jpg", src: "https://images.unsplash.com/photo-1543158266-0066955047b1?w=400&h=300&fit=crop", selected: false },
];

const FolderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function GalleryPage() {
  const [images, setImages] = useState(galleryImages);
  const selectedCount = images.filter((img) => img.selected).length;

  const toggleSelection = (id: number) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, selected: !img.selected } : img
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-[#FAFAFA] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-[200px] flex flex-col">
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FolderIcon />
                <span className="text-[14px] font-medium text-gray-700">
                  {selectedCount} Selected
                </span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <button className="flex items-center gap-1.5 text-red-500 hover:text-red-600 transition-colors">
                <TrashIcon />
                <span className="text-[14px] font-medium">Delete</span>
              </button>
            </div>
            <span className="text-[13px] text-gray-500">
              Showing 12 recent uploads
            </span>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer group aspect-[4/3] ${
                  image.selected ? "ring-2 ring-orange-500" : ""
                }`}
                onClick={() => toggleSelection(image.id)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />

                {/* Selection Checkbox */}
                <div
                  className={`absolute top-2 left-2 w-5 h-5 rounded flex items-center justify-center transition-all ${
                    image.selected
                      ? "bg-orange-500"
                      : "bg-white/80 border border-gray-300 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {image.selected && <CheckIcon />}
                </div>

                {/* Filename overlay for selected images */}
                {image.selected && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                    <span className="text-[11px] sm:text-[12px] text-white font-medium truncate block">
                      {image.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Annotation Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-[1000px] mx-auto">
            {/* Text Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Describe objects to annotate..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
              />
            </div>

            <div className="flex gap-3">
              {/* Model Selector */}
              <div className="relative flex-1 sm:flex-initial">
                <button className="flex items-center justify-between sm:justify-start gap-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-700 hover:border-gray-300 transition-colors sm:min-w-[160px]">
                  <span>YOLOv8 Large</span>
                  <ChevronDownIcon />
                </button>
              </div>

              {/* Start Annotating Button */}
              <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 py-3 rounded-xl text-[14px] font-medium transition-colors whitespace-nowrap">
                <SparkleIcon />
                <span className="hidden sm:inline">Start Annotating</span>
                <span className="sm:hidden">Start</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

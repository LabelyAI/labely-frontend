"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface AnnotatedImage {
  id: number;
  name: string;
  src: string;
  tag: string;
  selected: boolean;
}

const annotatedImages: AnnotatedImage[] = [
  { id: 1, name: "img_dataset_001.jpg", src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop", tag: "Car", selected: true },
  { id: 2, name: "street_cam_402.png", src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop", tag: "Pedestrian", selected: false },
  { id: 3, name: "traffic_signal_05.jpg", src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop", tag: "Traffic Light", selected: true },
  { id: 4, name: "vehicle_scan_22.jpg", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop", tag: "Car", selected: false },
  { id: 5, name: "park_data_88.jpg", src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=400&h=300&fit=crop", tag: "Cat", selected: false },
  { id: 6, name: "cat_outdoors_12.jpg", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop", tag: "Nature", selected: true },
  { id: 7, name: "moto_003.jpg", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", tag: "Motorcycle", selected: false },
  { id: 8, name: "highway_truck_09.jpg", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", tag: "Truck", selected: true },
];

const exportFormats = [
  { id: "yolo", label: "YOLO v8", description: "Popular format for real-time detection" },
  { id: "coco", label: "COCO JSON", description: "Microsoft COCO dataset format" },
  { id: "pascal", label: "Pascal VOC", description: "XML-based annotation format" },
  { id: "csv", label: "CSV", description: "Simple spreadsheet format" },
  { id: "tfrecord", label: "TFRecord", description: "TensorFlow dataset format" },
];

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ExportIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function AnnotatedPage() {
  const [images, setImages] = useState(annotatedImages);
  const [selectedFormat, setSelectedFormat] = useState(exportFormats[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedCount = images.filter((img) => img.selected).length;

  const toggleSelection = (id: number) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, selected: !img.selected } : img
      )
    );
  };

  const selectAll = () => {
    setImages((prev) => prev.map((img) => ({ ...img, selected: true })));
  };

  const invertSelection = () => {
    setImages((prev) => prev.map((img) => ({ ...img, selected: !img.selected })));
  };

  return (
    <div className="flex min-h-screen bg-[#FAFAFA] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-[200px] flex flex-col">
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Page Title */}
          <div className="mb-1">
            <h1 className="text-[20px] sm:text-[22px] font-semibold text-gray-900">Annotated Dataset</h1>
            <p className="text-[13px] sm:text-[14px] text-gray-500 mt-1">
              342 images | 12 classes | Last modified 2m ago
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-5 mb-6">
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Search */}
              <div className="relative flex-1 sm:flex-initial">
                {/* <SearchIcon /> */}
                <input
                  type="text"
                  placeholder="Search by filename or tag..."
                  className="w-full sm:w-[280px] pl-10 pr-4 py-2.5 bg-orange-50 border border-orange-100 rounded-lg text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-300 transition-all absolute left-0 top-1/2 -translate-y-1/2"
                  style={{ paddingLeft: '36px' }}
                />
                <div className="w-full sm:w-[280px] h-[42px]" />
              </div>

              {/* All Classes Dropdown */}
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors">
                <span className="hidden sm:inline">All</span> Classes
                <ChevronDownIcon />
              </button>

              {/* Sort Dropdown */}
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] font-medium text-gray-700 hover:border-gray-300 transition-colors">
                <span className="hidden sm:inline">Newest</span> First
                <ChevronDownIcon />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={selectAll}
                className="px-3 sm:px-4 py-2.5 bg-gray-900 text-white rounded-lg text-[13px] font-medium hover:bg-gray-800 transition-colors"
              >
                Select All
              </button>
              <button
                onClick={invertSelection}
                className="px-3 sm:px-4 py-2.5 bg-gray-900 text-white rounded-lg text-[13px] font-medium hover:bg-gray-800 transition-colors hidden sm:block"
              >
                Invert Selection
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {images.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => toggleSelection(image.id)}
              >
                {/* Image Container */}
                <div
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] ${
                    image.selected ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Selection Checkbox */}
                  <div
                    className={`absolute top-3 left-3 w-5 h-5 rounded flex items-center justify-center transition-all ${
                      image.selected
                        ? "bg-orange-500"
                        : "bg-white/80 border border-gray-300 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {image.selected && <CheckIcon />}
                  </div>
                </div>

                {/* Image Info */}
                <div className="mt-2">
                  <p className="text-[12px] sm:text-[13px] text-gray-700 font-medium truncate">
                    {image.name}
                  </p>
                  <span className="inline-block mt-1 px-2 sm:px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-[11px] font-medium rounded">
                    {image.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 max-w-[1200px] mx-auto">
            {/* Selection Info */}
            <div className="flex flex-col">
              <span className="text-[14px] font-medium text-gray-800">
                {selectedCount} Images Selected
              </span>
              <span className="text-[12px] text-gray-400">Ready to export</span>
            </div>

            {/* Export Format Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] font-medium text-gray-700 hover:border-gray-300 transition-colors w-full sm:w-[220px]"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[11px] text-gray-400 font-normal">Export Format</span>
                  <span className="text-[14px] font-medium text-gray-800">{selectedFormat.label}</span>
                </div>
                <ChevronDownIcon />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute bottom-full mb-2 left-0 right-0 sm:right-auto sm:w-[280px] bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="py-2 max-h-[300px] overflow-y-auto">
                      {exportFormats.map((format) => (
                        <button
                          key={format.id}
                          onClick={() => {
                            setSelectedFormat(format);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${
                            selectedFormat.id === format.id ? "bg-orange-50" : ""
                          }`}
                        >
                          <div className="flex-1">
                            <p className={`text-[14px] font-medium ${
                              selectedFormat.id === format.id ? "text-orange-600" : "text-gray-800"
                            }`}>
                              {format.label}
                            </p>
                            <p className="text-[12px] text-gray-400">{format.description}</p>
                          </div>
                          {selectedFormat.id === format.id && (
                            <CheckCircleIcon />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center gap-2 flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 border border-gray-200 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <DownloadIcon />
                <span className="hidden sm:inline">Download</span> Images
              </button>
              <button className="flex items-center justify-center gap-2 flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-[13px] font-medium transition-colors">
                <ExportIcon />
                Export <span className="hidden sm:inline">Dataset</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

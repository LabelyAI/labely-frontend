"use client";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// Icons
const UploadIconSmall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const CloudUploadIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const TotalImagesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const PendingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const AnnotatedCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function UploadPage() {
  const uploadingFiles = [
    { name: "dataset_v2_001.jpg", status: "uploaded" },
    { name: "dataset_v2_002.jpg", status: "uploaded" },
    { name: "dataset_v2_003.png", status: "processing" },
    { name: "dataset_v2_004.jpg", status: "pending" },
  ];

  return (
    <div className="flex min-h-screen bg-[#FAFAFA] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-[200px]">
        <Header />

        {/* Page Content */}
        <div className="p-4 sm:p-6 max-w-[800px] mx-auto">
          {/* Page Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-xl sm:text-[22px] font-semibold text-gray-900">Upload Dataset</h1>
            <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors">
              <UploadIconSmall />
              Start Upload
            </button>
          </div>

          {/* Upload Zone */}
          <div className="border-2 border-dashed border-orange-300 bg-orange-50/30 rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center mb-6 hover:border-orange-400 transition-colors cursor-pointer">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <CloudUploadIcon />
            </div>
            <p className="text-[14px] sm:text-[15px] text-gray-700 font-medium mb-1 text-center">Click to upload or drag and drop</p>
            <p className="text-[12px] sm:text-[13px] text-gray-400 mb-4 text-center">SVG, PNG, JPG or GIF (max. 20MB)</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-[13px] font-medium transition-colors">
              Select Files
            </button>
          </div>

          {/* Upload Progress */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px] font-medium text-gray-700">Uploading 4 files...</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
              <div className="w-[65%] h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300" />
            </div>

            {/* File List */}
            <div className="space-y-3">
              {uploadingFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      file.status === "pending" ? "bg-gray-100" : "bg-orange-100"
                    }`}>
                      {file.status === "processing" ? (
                        <SpinnerIcon />
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={file.status === "pending" ? "#9CA3AF" : "#F97316"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[13px] sm:text-[14px] truncate ${file.status === "pending" ? "text-gray-400" : "text-gray-700"}`}>
                      {file.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {file.status === "uploaded" && (
                      <>
                        <CheckIcon />
                        <span className="text-[11px] sm:text-[12px] text-green-500 font-medium">Uploaded</span>
                      </>
                    )}
                    {file.status === "processing" && (
                      <span className="text-[11px] sm:text-[12px] text-orange-500 font-medium">Processing...</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] text-gray-500">Total Images</span>
                <TotalImagesIcon />
              </div>
              <span className="text-[24px] sm:text-[26px] font-semibold text-gray-900">1,248</span>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] text-orange-500">Pending Review</span>
                <PendingIcon />
              </div>
              <span className="text-[24px] sm:text-[26px] font-semibold text-orange-500">142</span>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] text-green-500">Annotated</span>
                <AnnotatedCheckIcon />
              </div>
              <span className="text-[24px] sm:text-[26px] font-semibold text-green-500">854</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

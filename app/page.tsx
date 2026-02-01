"use client";

import Link from "next/link";
import { useState } from "react";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </div>
    <span className="font-bold text-xl text-gray-900">LabelyAI</span>
  </div>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const UploadIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
  </svg>
);

const ExportIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
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

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const features = [
    "AI-powered auto-annotation",
    "Support for YOLO, COCO, Pascal VOC formats",
    "Real-time collaboration",
    "Smart review workflow",
  ];

  const steps = [
    {
      icon: UploadIcon,
      title: "Upload Dataset",
      description: "Drag and drop your images or upload entire folders. We support PNG, JPG, and more.",
    },
    {
      icon: SparkleIcon,
      title: "AI Annotation",
      description: "Our AI automatically detects and labels objects in your images with high accuracy.",
    },
    {
      icon: ExportIcon,
      title: "Export & Use",
      description: "Review, refine, and export your annotated dataset in your preferred format.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Logo />
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
            <a href="#pricing" className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-[14px] font-medium rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a 
                href="#features" 
                className="block text-[15px] text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block text-[15px] text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a 
                href="#pricing" 
                className="block text-[15px] text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <Link
                  href="/login"
                  className="block w-full text-center px-4 py-2.5 text-[14px] font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="block w-full text-center px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-[14px] font-medium rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-[12px] sm:text-[13px] font-medium text-orange-600">Now with GPT-4 Vision support</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            AI-Powered Image
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Annotation Platform
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 px-4">
            Accelerate your machine learning projects with intelligent auto-labeling.
            Upload, annotate, and export datasets in minutes, not hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <Link
              href="/register"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-[15px] font-medium rounded-xl transition-colors shadow-lg shadow-orange-500/25"
            >
              Start Free Trial
              <ArrowRightIcon />
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-700 text-[15px] font-medium rounded-xl hover:bg-gray-50 transition-colors text-center"
            >
              See how it works
            </a>
          </div>

          {/* Feature bullets */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-[13px] sm:text-[14px] text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot/Demo Section */}
      <section className="pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SparkleIcon />
                </div>
                <p className="text-gray-500 text-[14px] sm:text-[15px]">Interactive Demo Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Get your annotated dataset ready in three simple steps
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-orange-50 rounded-2xl p-6 sm:p-8 h-full">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <step.icon />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-[14px]">
                    {index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to accelerate your ML workflow?</h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto text-[14px] sm:text-base">
              Join thousands of teams using LabelyAI to build better models faster.
              Start with 1,000 free credits.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 text-[15px] font-semibold rounded-xl hover:bg-orange-50 transition-colors"
            >
              Get Started for Free
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-[13px] text-gray-500 order-3 sm:order-2">© 2026 LabelyAI. All rights reserved.</p>
          <div className="flex items-center gap-6 order-2 sm:order-3">
            <a href="#" className="text-[13px] text-gray-500 hover:text-gray-700">Privacy</a>
            <a href="#" className="text-[13px] text-gray-500 hover:text-gray-700">Terms</a>
            <a href="#" className="text-[13px] text-gray-500 hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

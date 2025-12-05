'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RACE_IMAGES, GROUP_IMAGES } from '@/constants';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'race' | 'team'>('race');

  const allImages = activeTab === 'race' ? RACE_IMAGES : GROUP_IMAGES;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src="/assets/images/race_image_5.png"
            alt="Gallery hero"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-container padding-container">
          <h1 className="bold-88 mb-4 drop-shadow-2xl">Race Gallery</h1>
          <p className="regular-24">Captured moments from the Lubowa Grand Prix 2025</p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="max-container padding-container py-20">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('race')}
            className={`px-8 py-4 rounded-full bold-16 transition-all ${
              activeTab === 'race'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🏁 Race Action ({RACE_IMAGES.length})
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-8 py-4 rounded-full bold-16 transition-all ${
              activeTab === 'team'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            👥 Team Photos ({GROUP_IMAGES.length})
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    🔍
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Selected image"
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Event Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="max-container padding-container">
          <h2 className="bold-52 text-center mb-12">Event Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="bold-24 mb-2">{RACE_IMAGES.length + GROUP_IMAGES.length}+</h3>
              <p className="regular-16 text-gray-600">Photos Captured</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="bold-24 mb-2">iPhone 12 Pro Max</h3>
              <p className="regular-16 text-gray-600">Professional Quality</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="bold-24 mb-2">Unforgettable</h3>
              <p className="regular-16 text-gray-600">Race Moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="max-container padding-container py-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h2 className="bold-52 mb-4">Share Your Experience</h2>
          <p className="regular-20 mb-8 max-w-2xl mx-auto">
            Tag us on social media with #SafariDrift and share your favorite moments from the race!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn_white">
              📱 Instagram
            </button>
            <button className="btn_white_text">
              🎵 TikTok
            </button>
            <button className="btn_white_text">
              🐦 Twitter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
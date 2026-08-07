"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function BanquetSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const halls = [
    {
      name: "Nataraj Hall",
      image: "/Rooms/basswithrounded.jpg",
      video: "/Vedio/func.bhall.mp4",
    },
    {
      name: "Tandav Hall",
      image: "/Rooms/Ghalwithstage.jpg",
      video: "/Vedio/func.ghall.mp4",
    },
    {
      name: "Kailash Terrace",
      image: "/Rooms/coctail.jpg",
      video: "/Vedio/func.tarece.mp4",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">

        <h2 className="text-3xl font-bold mb-10">
          Our Banquets
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {halls.map((hall) => (
            <div
              key={hall.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              
              {/* Image */}
              <div className="relative">
                <Image
                  src={hall.image}
                  alt={hall.name}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Play Button */}
                <button
                  onClick={() => setActiveVideo(hall.video)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                >
                  <FaPlay className="text-white text-3xl" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">
                  {hall.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 🎥 Fullscreen Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black z-50">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white text-3xl z-50"
            >
              ✖
            </button>

            {/* Video */}
            <video
              src={activeVideo}
              controls
              autoPlay
              onEnded={() => setActiveVideo(null)} // ✅ auto close
              className="w-full h-full object-contain"
            />
          </div>
        )}

      </div>
    </section>
  );
}
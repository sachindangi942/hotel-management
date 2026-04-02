"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar, FaPlay } from "react-icons/fa";

export default function RoomCategories() {
  const [activeVideo, setActiveVideo] = useState(null);

  const rooms = [
    {
      name: "Economy Double  Suite",
      image: "/Rooms/Economy_Double.png",
      rating: 4.8,
      video: "/Vedio/vedio.mp4",
    },
    {
      name: "Deluxe Premium  ",
      image: "/Rooms/Deluxe.png",
      rating: 4.5,
      video: "/Rooms/room2.mp4",
    },
    {
      name: "Superiour King",
      image: "/Rooms/Superiour.jpg",
      rating: 4.2,
      video: "/Rooms/room3.mp4",
    },
    {
      name: "Kailash Bliss",
      image: "/Rooms/4bed.jpg",
      rating: 4.6,
      video: "/Rooms/room4.mp4",
    },
    {
      name: "Honeymoon Suite",
      image: "/Rooms/H_Suit.png",
      rating: 4.9,
      video: "/Vedio/Hsuit_vedio.mp4",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">

        <h2 className="text-3xl font-bold mb-10">
          Our Room Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >

              {/* Image */}
              <div className="relative">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover group-hover:scale-105 transition"
                />
                <button
                  onClick={() => setActiveVideo(room.video)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition"
                >
                  <FaPlay className="text-white text-3xl" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">
                  {room.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* 🎥 Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-2 right-2 text-black text-xl"
              >
                ✖
              </button>

              <video
                src={activeVideo}
                controls
                autoPlay
                onEnded={() => setActiveVideo(null)} // ✅ yahi important hai
                className="w-full rounded"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
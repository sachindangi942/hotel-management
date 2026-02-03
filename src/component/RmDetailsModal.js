"use client";
import { motion } from "framer-motion";

export default function RoomDetailsModal({ room, onClose, onBook }) {
  if (!room) return null;
  console.log("RoomDetails",room)

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-900 text-white w-full max-w-3xl rounded-xl overflow-y-auto max-h-[90vh]"
      >
        {/* Images */}
        <div className="flex overflow-x-auto gap-2 p-4">
          {room.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-48 rounded-lg"
            />
          ))}
        </div>

        {/* Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            Room {room.id}
          </h2>

          <p className="text-gray-300 mb-3">
            {room.description}
          </p>

          <p className="mb-3">
            <span className="font-semibold">Price:</span> ₹{room.Price}/night
          </p>

          {/* Facilities */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Facilities</h4>
            <div className="flex flex-wrap gap-2">
              {room.facilities?.map((f, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Video */}
          {room.vedio && (
            <video
              controls
              className="w-full rounded-lg mb-4"
              src={room.vedio}
            />
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-gray-700 rounded-lg"
            >
              Close
            </button>

            {room.status === "available" && (
              <button
                onClick={() => onBook(room)}
                className="flex-1 py-2 bg-green-600 rounded-lg hover:bg-green-700"
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";

const RoomModal = ({ room, onClose, onAction, role }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 p-6 rounded-xl w-80 text-white"
      >
        <h2 className="text-xl font-bold mb-2">Room {room.id}</h2>
        <p className="mb-4">
          Status:
          <span
            className={`ml-2 font-semibold ${
              room.status === "available"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {room.status}
          </span>
        </p>

        {/* Reception actions */}
        {role === "reception" && (
          <button
            onClick={() => onAction(room)}
            className={`w-full py-2 rounded-lg mb-2 ${
              room.status === "available"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {room.status === "available" ? "Book Room" : "Checkout"}
          </button>
        )}

        {/* Admin only */}
        {role === "admin" && (
          <p className="text-sm text-yellow-400 mb-2">
            Admin view (read-only)
          </p>
        )}

        <button
          onClick={onClose}
          className="w-full py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default RoomModal;

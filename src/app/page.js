// "use client";
// import { useState } from "react";
// import { rooms as initialRooms } from "@/data/rooms";
// import TopControls from "@/component/TopControls";
// import StatsCards from "@/component/StatsCard";
// import FloorRooms from "@/component/FloorRooms";
// import RoomModal from "@/component/RoomModal";
// import RoomDetailsModal from "@/component/RmDetailsModal";
// import BookingModal from "@/component/BookingModal";

// export default function Dashboard() {
//   const [rooms, setRooms] = useState(initialRooms);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [search, setSearch] = useState("");
//   const [onlyAvailable, setOnlyAvailable] = useState(false);
//   const [role, setRole] = useState("reception");
//   const [viewRoom, setViewRoom] = useState(null);
//   const [bookingRoom, setBookingRoom] = useState(null);


//   const handleBooking = (bookingData) => {
//   setRooms(prev =>
//     prev.map(room =>
//       room.id === bookingData.roomId
//         ? {
//             ...room,
//             bookings: [
//               ...(room.bookings || []),
//               bookingData
//             ]
//           }
//         : room
//     )
//   );
// };


//   const handleRoomAction = (room) => {
//     setRooms((prev) =>
//       prev.map((r) =>
//         r.id === room.id
//           ? {
//             ...r,
//             status: r.status === "available" ? "booked" : "available",
//           }
//           : r
//       )
//     );
//     setSelectedRoom(null);
//   };

//   const filteredRooms = rooms.filter((room) => {
//     if (onlyAvailable && room.status !== "available") return false;
//     if (search && !room.id.toString().includes(search)) return false;
//     return true;
//   });

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
//       <h1 className="text-2xl font-bold mb-4">Hotel Management Dashboard</h1>

//       <TopControls
//         search={search}
//         setSearch={setSearch}
//         onlyAvailable={onlyAvailable}
//         setOnlyAvailable={setOnlyAvailable}
//         role={role}
//         setRole={setRole}
//       />

//       <StatsCards rooms={rooms} />

//       <div className="mt-8">
//         {/* <FloorRooms
//           rooms={filteredRooms}
//           onRoomClick={setViewRoom}   // 👈 details modal ke liye
//         /> */}

//         <FloorRooms
//           rooms={filteredRooms}
//           onRoomClick={(room) => {
//             if (room.status === "available") {
//               setViewRoom(room);        // 👈 Details modal open
//             } else {
//               setSelectedRoom(room);    // 👈 Direct checkout modal
//             }
//           }}
//         />



//       </div>

//       <RoomModal
//         room={selectedRoom}
//         onClose={() => setSelectedRoom(null)}
//         onAction={handleRoomAction}
//         role={role}
//       />


//       {/* <RoomDetailsModal
//         room={viewRoom}
//         onClose={() => setViewRoom(null)}
//         onBook={(room) => {
//           setViewRoom(null);
//           setSelectedRoom(room); // open booking modal
//         }}
//       /> */}


//       {/* <RoomDetailsModal
//         room={viewRoom}
//         onClose={() => setViewRoom(null)}
//         onBook={(room) => {
//           setViewRoom(null);
//           setSelectedRoom(room);
//         }}
//         onUnbook={(room) => {
//           handleRoomAction(room);   // toggle karega
//           setViewRoom(null);
//         }}
//       /> */}


//       <RoomDetailsModal
//         room={viewRoom}
//         onClose={() => setViewRoom(null)}
//         onBook={(room) => {
//           setViewRoom(null);
//           // setSelectedRoom(room); // 👈 Book modal open
//           setBookingRoom(room)
//         }}
//       />

//       <BookingModal
//         room={bookingRoom}
//         onClose={() => setBookingRoom(null)}
//         onConfirm={(bookingData) => {
//           handleBooking(bookingData);
//           setBookingRoom(null);
//         }}
//       />




//     </div>
//   );
// }


"use client";
import BanquetSection from "@/component/BanquetsCat";
import Footer from "@/component/Footer";
import HeroSection from "@/component/Hero";
import HotelInfoSection from "@/component/HotelInfoSec";
import RoomCategories from "@/component/RoomsCat";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <section className="max-w-5xl mx-auto py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Comfortable Stay
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Shivlok Hotel provides comfortable rooms and a peaceful
          environment for travelers. Our goal is to give guests
          a relaxing and affordable stay.
        </p>
      </section>
      <RoomCategories />
      <BanquetSection />
      <HotelInfoSection />
      <Footer />
      <footer className="bg-gray-900 text-white text-center py-4">
        © {new Date().getFullYear()} Shivlok Hotel
      </footer>

    </div>
  );
}
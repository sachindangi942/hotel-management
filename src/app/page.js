
// ;
// import Rooms from '@/component/Rooms';
// import React from 'react'

//  const Page = () => {
//   return (
//     <div className='min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800'>
//     {/* <Home/> */}
//     <Rooms/>
//     {/* <Qualification/>
//     <Projects/>
//     <About/>
//     <Contact/> */}
//     </div>
//   )
// }
//  export default Page;

"use client";
import { useState } from "react";
import { rooms as initialRooms } from "@/data/rooms";
import TopControls from "@/component/TopControls";
import StatsCards from "@/component/StatsCard";
import FloorRooms from "@/component/FloorRooms";
import RoomModal from "@/component/RoomModal";
import RoomDetailsModal from "@/component/RmDetailsModal";

export default function Dashboard() {
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [role, setRole] = useState("reception");
  const [viewRoom, setViewRoom] = useState(null);


  const handleRoomAction = (room) => {
    setRooms((prev) =>
      prev.map((r) =>
        r.id === room.id
          ? {
            ...r,
            status: r.status === "available" ? "booked" : "available",
          }
          : r
      )
    );
    setSelectedRoom(null);
  };

  const filteredRooms = rooms.filter((room) => {
    if (onlyAvailable && room.status !== "available") return false;
    if (search && !room.id.toString().includes(search)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Hotel Management Dashboard</h1>

      <TopControls
        search={search}
        setSearch={setSearch}
        onlyAvailable={onlyAvailable}
        setOnlyAvailable={setOnlyAvailable}
        role={role}
        setRole={setRole}
      />

      <StatsCards rooms={rooms} />

      <div className="mt-8">
        <FloorRooms
          rooms={filteredRooms}
          onRoomClick={setViewRoom}   // 👈 details modal ke liye
        />

      </div>

      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onAction={handleRoomAction}
        role={role}
      />


      <RoomDetailsModal
        room={viewRoom}
        onClose={() => setViewRoom(null)}
        onBook={(room) => {
          setViewRoom(null);
          setSelectedRoom(room); // open booking modal
        }}
      />

    </div>
  );
}

// const FloorRooms = ({ rooms }) => {
//   const floors = rooms.reduce((acc, room) => {
//     acc[room.floor] = acc[room.floor] || [];
//     acc[room.floor].push(room);
//     return acc;
//   }, {});

//   return (
//     <div className="mt-10 space-y-6">
//       {Object.keys(floors).map(floor => (
//         <div key={floor} className="bg-gray-900 p-4 rounded-xl">
//           <h3 className="text-lg font-semibold mb-3">
//             Floor {floor} ({floors[floor].length} Rooms)
//           </h3>

//           <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
//             {floors[floor].map(room => (
//               <div
//                 key={room.id}
//                 className={`p-3 rounded-lg text-center cursor-pointer
//                   ${
//                     room.status === "available"
//                       ? "bg-green-600 hover:bg-green-700"
//                       : "bg-red-600 hover:bg-red-700"
//                   }`}
//               >
//                 <p className="font-semibold">{room.id}</p>
//                 <p className="text-xs">
//                   {room.status === "available" ? "Available" : "Booked"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FloorRooms;


"use client";

const FloorRooms = ({ rooms, onRoomClick }) => {
  console.log("FloorRooms type : " ,  onRoomClick)
  return (
    <div className="space-y-6">
      {Object.entries(
        rooms.reduce((acc, room) => {
          acc[room.floor] = acc[room.floor] || [];
          acc[room.floor].push(room);
          return acc;
        }, {})
      ).map(([floor, floorRooms]) => (
        <div key={floor} className="bg-gray-900 p-4 rounded-xl">
          <h3 className="mb-3 font-semibold">
            Floor {floor} ({floorRooms.length} rooms)
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {floorRooms.map((room) => (
              <div
                key={room.id}
                onClick={() => onRoomClick && onRoomClick(room)}
                className={`p-3 rounded-lg cursor-pointer text-center
                  ${
                    room.status === "available"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
              >
                <p className="font-bold">{room.id}</p>
                <p className="text-xs">{room.status}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloorRooms;

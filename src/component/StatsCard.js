import { FaBed, FaCheckCircle, FaLock, FaLayerGroup } from "react-icons/fa";

const StatsCards = ({ rooms }) => {
  const total = rooms.length;
  const booked = rooms.filter(r => r.status === "booked").length;
  const available = rooms.filter(r => r.status === "available").length;
  const floors = new Set(rooms.map(r => r.floor)).size;

  const stats = [
    { name: "Total Rooms", value: total, icon: <FaBed size={35}/> },
    {
      name: "Available Rooms",
      value: available,
      icon: (
        <div className="relative">
          <FaBed size={35}/>
          <FaCheckCircle
            size={16}
            className="absolute -bottom-1 -right-1 text-green-500"
          />
        </div>
      )
    },
    {
      name: "Booked Rooms",
      value: booked,
      icon: (
        <div className="relative">
          <FaBed size={35}/>
          <FaLock
            size={16}
            className="absolute -bottom-1 -right-1 text-red-500"
          />
        </div>
      )
    },
    { name: "Floors", value: floors, icon: <FaLayerGroup size={35}/> }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-gray-800 p-4 rounded-xl text-center shadow"
        >
          <div className="flex justify-center mb-2">{item.icon}</div>
          <p className="text-2xl font-bold">{item.value}</p>
          <p className="text-sm text-gray-300">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

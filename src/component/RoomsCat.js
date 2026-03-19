export default function RoomCategories() {
  const rooms = [
    "Shivlok Royal Double King Suite",
    "Somnath Premium",
    "Tapovan Deluxe",
    "Kailash Bliss",
    "Honeymoon Suite",
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
              key={room}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{room}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
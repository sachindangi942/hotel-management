export default function BanquetSection() {
  const halls = [
    "Nataraj Hall",
    "Tandav Hall",
    "Kailash Terrace",
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4">

        <h2 className="text-3xl font-bold mb-10">
          Our Banquets
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {halls.map((hall) => (
            <div
              key={hall}
              className="bg-gray-100 shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{hall}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
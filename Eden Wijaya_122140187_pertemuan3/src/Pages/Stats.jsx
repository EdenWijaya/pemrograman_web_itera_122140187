import { useBookContext } from "../Context/BookContext";

const Stats = () => {
  const { books } = useBookContext();

  const total = books.length;
  const miliki = books.filter((b) => b.status === "miliki").length;
  const baca = books.filter((b) => b.status === "baca").length;
  const beli = books.filter((b) => b.status === "beli").length;

  const stats = [
    { label: "Total Buku", count: total, color: "bg-blue-100 text-blue-800" },
    { label: "Dimiliki", count: miliki, color: "bg-green-100 text-green-800" },
    { label: "Sedang Dibaca", count: baca, color: "bg-yellow-100 text-yellow-800" },
    { label: "Ingin Dibeli", count: beli, color: "bg-red-100 text-red-800" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">📚 Statistik Buku Kamu</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className={`p-5 rounded-xl shadow transition-transform transform hover:scale-105 ${item.color}`}
          >
            <div className="text-sm font-semibold">{item.label}</div>
            <div className="text-3xl font-extrabold mt-2">{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

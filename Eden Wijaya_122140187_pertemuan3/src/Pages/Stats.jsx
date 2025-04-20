import { useBookContext } from "../Context/BookContext";

const Stats = () => {
  const { books } = useBookContext();

  const total = books.length;
  const miliki = books.filter((b) => b.status === "miliki").length;
  const baca = books.filter((b) => b.status === "baca").length;
  const beli = books.filter((b) => b.status === "beli").length;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📊 Statistik Buku</h2>
      <ul className="space-y-2">
        <li>
          Total Buku: <strong>{total}</strong>
        </li>
        <li>
          Miliki: <strong>{miliki}</strong>
        </li>
        <li>
          Sedang Dibaca: <strong>{baca}</strong>
        </li>
        <li>
          Ingin Dibeli: <strong>{beli}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Stats;

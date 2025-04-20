import { useState } from "react";

const BookFilter = ({ onFilter }) => {
  const [filter, setFilter] = useState("semua");

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilter(value);
  };

  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filter:</label>
      <select value={filter} onChange={handleChange} className="border p-2 rounded">
        <option value="semua">Semua</option>
        <option value="miliki">Miliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
};

export default BookFilter;

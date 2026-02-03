const TopControls = ({
  search,
  setSearch,
  onlyAvailable,
  setOnlyAvailable,
  role,
  setRole,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="number"
        placeholder="Search room number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 rounded bg-gray-800 text-white"
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={() => setOnlyAvailable(!onlyAvailable)}
        />
        Available only
      </label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="px-3 py-2 rounded bg-gray-800"
      >
        <option value="reception">Reception</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default TopControls;

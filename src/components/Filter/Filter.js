export default function Filter({ filterInput, filterValue }) {
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={filterInput}
      ></input>
    </label>
  );
}

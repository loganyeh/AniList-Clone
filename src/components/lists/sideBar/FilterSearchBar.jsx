function FilterSearchBar() {
  return (
    <>
      <form className="h-13 w-58 mt-8 mr-16">
        <input
          type="text"
          id="filter-input"
          className="h-full w-full pl-8 bg-white rounded"
          placeholder="Filter"
        />
      </form>
    </>
  );
}

export default FilterSearchBar;

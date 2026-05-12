import { useEffect } from "react";


const SearchBox = ({ searchTerm, setSearchTerm, searchInput, setSearchInput }) => {

  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setSearchTerm(searchInput.trim());
    }
    if (e.key === "Escape") {
      setSearchInput("");
    }
  }

  return (
    <input
      type="text"
      id="searchbox"
      placeholder="Search images..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBox;

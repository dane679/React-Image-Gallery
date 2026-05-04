import { useState, useEffect } from "react";


const SearchBox = ({ searchTerm, setSearchTerm, searchInput, setSearchInput }) => {
  // const [draft, setDraft] = useState(searchTerm);

  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      // setSearchTerm(draft.trim());
      // commitSearch(searchInput);
      setSearchTerm(searchInput.trim());
    }
    if (e.key === "Escape") {
      setSearchInput("");
      // setSearchTerm("");
    }
  }

  function commitSearch(value) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
  
      const trimmed = value.trim();
  
      if (trimmed) {
        params.set("q", trimmed);
      } else {
        params.delete("q");
      }
  
      return params;
    });
  }

  return (
    <input
      type="text"
      id="searchbox"
      placeholder="Search images..."
      // value={searchTerm}
      // onChange={(e) => setSearchTerm(e.target.value)}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBox;

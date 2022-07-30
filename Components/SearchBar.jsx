import { motion } from "framer-motion";
import StyledSearchBar from "./Style/SearchBar.style";

function SearchBar({ change }) {
  return (
    <StyledSearchBar>
      <motion.input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={change}
        alt="Search bar"
      />
      <motion.input
        className="search-icon"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="image"
        src="/svgs/magnifying-glass-solid.svg"
        alt="search button"
      />
    </StyledSearchBar>
  );
}

export default SearchBar;

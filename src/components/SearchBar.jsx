import { useContext } from "react";
import search from "../assets/icons/search.svg";
import { EmployeeContext } from "../Context/EmployeeContext";


/*  Search Bar Component -
    - For searching employees by name, department or role
*/

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(EmployeeContext);

  return (
    <div className="mx-4 mb-6 border border-gray-300 rounded-md px-4 py-2 flex items-center gap-4 min-w-[83%] sm:w-1/2 lg:w-1/3 max-w-md">
      {/* Search Icon */}
      <img src={search} alt="Search" className="w-5 h-5" />

      {/* Search Input bar*/}
      <input
        id="searchInput"
        type="search"
        placeholder="Search by name, department or role"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full outline-none text-sm sm:text-base"
      />
    </div>
  );
}

export default SearchBar;

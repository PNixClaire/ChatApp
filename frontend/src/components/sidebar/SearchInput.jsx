import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />

      <button
        type="submit"
        className="btn btn-circle btn-secondary bg-licorice text-white"
      >
        <GoSearch className="w-6 h-6 outline-none text-chinaRose"/>
      </button>
    </form>
  );
};

export default SearchInput;


/**
 * import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />

      <button
        type="submit"
        className="btn btn-circle btn-secondary bg-licorice text-white"
      >
        <GoSearch className="w-6 h-6 outline-none text-chinaRose"/>
      </button>
    </form>
  );
};

export default SearchInput;
 */
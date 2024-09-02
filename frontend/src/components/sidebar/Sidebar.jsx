import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx"

function Sidebar() {
  return (
    <div className="border-r border-amaranthPink p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Conversations />
      <LogoutButton/>
    </div>
  );
}

export default Sidebar

/**
 * import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx"

function Sidebar() {
  return (
    <div className="border-r border-amaranthPink p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Conversations />
      <LogoutButton/>
    </div>
  );
}

export default Sidebar
 */
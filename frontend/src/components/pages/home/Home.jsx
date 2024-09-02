import MessageContainer from '../../messages/MessageContainer.jsx';
import Sidebar from '../../sidebar/Sidebar.jsx';

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] p-6 bg-pink-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer/>
    </div>
  );
}

export default Home


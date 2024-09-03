import Sidebar from "../component/Sidebar";
import HomeContent from "../component/HomeContent";
const Home = () => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <HomeContent />
    </div>
  )
};

export default Home;
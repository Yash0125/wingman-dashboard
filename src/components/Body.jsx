import Glance from "./Glance";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex-1  h-full">
      <Header/>
      <div className="flex flex-row h-full m-11 bg-white shadow-lg rounded-lg border border-black">

      <Glance/>
      </div>
    </div>
  );
};

export default Body;

import Glance from "./Glance";
import Header from "./Header";
import Insights from "./Insights";

const Body = () => {
  return (
    <div className="flex-1  h-full">
      <Header/>
      <div className="flex flex-col h-full m-11 bg-white shadow-lg rounded-lg border border-black">

      <Glance/>
      <Insights/>
      </div>
    </div>
  );
};

export default Body;

import Glance from "./Glance";
import Header from "./Header";
import Insights from "./Insights";
import Order from "./Order";

const Body = () => {
  return (
    <div className="flex-1 h-full">
      <Header />
      <div className="flex flex-col h-[80vh] m-11 bg-white shadow-lg rounded-lg overflow-hidden no-scrollbar">
        <div className="flex flex-col flex-1 overflow-y-scroll p-6 no-scrollbar">
          <Glance />
          <Insights />
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Body;
